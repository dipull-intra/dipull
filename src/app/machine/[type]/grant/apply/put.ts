import "moment-timezone";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

import { checkWeekend } from "@/utils/date";
import { collections } from "@/utils/db";
import { accessVerify } from "@/utils/jwt";

import { MachineType, machineTypeToKorean } from "../../utils";

import { MachineApplyResponse } from "./utils";

const PUT = async (
  req: NextRequest,
  { params }: {
    params: {
      type: MachineType
    }
  }
) => {
  try {
    const { machine, time } = await req.json();
    if (!machine || !time) {
      throw new Error("빈칸을 모두 채워주세요.");
    }

    const today = moment().tz("Asia/Seoul").format("YYYY-MM-DD");

    const accessToken = req.cookies.get("access_token")?.value || "";
    const { id, gender, number } = await accessVerify(accessToken);

    const grade = Math.floor(number / 1000);
    const query = await checkWeekend(today) ? {
      "allow.weekend": grade
    } : {
      "allow.default": grade
    };

    const machine_list = await collections.machine_list();
    const machines = await machine_list.findOne({
      code: machine,
      type: params.type,
      gender: gender,
      ...query,
    });
    if (!machines) { 
      throw new Error("예약할 수 없는 기기입니다.");
    }

    const machineDB = await collections.machine();
    const myMachine = await machineDB.findOne({
      owner: id,
      date: today,
    });
    if (myMachine) { 
      throw new Error("이미 예약된 기기가 있습니다.");
    }

    const machineData = await machineDB.findOne({
      code: machine,
      type: params.type,
      date: today,
      time: time,
    });
    if (machineData) { 
      throw new Error(`이미 예약된 ${machineTypeToKorean(params.type)}입니다.`);
    }
    const insert = await machineDB.insertOne({
      code: machine,
      type: params.type,
      date: today,
      time: time,
      owner: id,
    });

    if (!insert.insertedId) { 
      throw new Error("예약에 실패했습니다.");
    }

    const response = NextResponse.json<MachineApplyResponse>({
      success: true,
    });
    return response;
  }
  catch (e: any) {
    const response = NextResponse.json<MachineApplyResponse>({
      success: false,
      error: {
        title: "기기 예약에 실패했어요.",
        description: e.message,
      }
    }, {
      status: 400,
    });
    console.error(e.message);
    return response;
  }
};

export default PUT;