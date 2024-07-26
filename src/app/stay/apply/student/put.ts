import "moment-timezone";
import moment from "moment";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import xss from "xss";


import { getWeekStart } from "@/utils/date";
import { collections } from "@/utils/db";
import { Stay } from "@/utils/db/utils";
import { accessVerify } from "@/utils/jwt";

import { StayResponse } from "./utils";

const PUT = async (
  req: NextRequest,
) => {
  try {
    const { reason, seat } = await req.json();
    if (!seat && !reason) { 
      throw new Error("좌석을 선택하거나 미선택 사유를 작성해주세요.");
    }
    else if (seat && reason) {
      throw new Error("좌석 선택 또는 미선택 사유만 입력해주세요.");
    }

    const accessToken = req.cookies.get("access_token")?.value || "";
    const { id, number, gender } = await accessVerify(accessToken);

    const week = await getWeekStart();

    const seatData: Stay["seat"] = seat ? {
      onSeat: true,
      num: seat,
    } : {
      onSeat: false,
      reason: xss(reason),
    };

    const stay = await collections.stay();
    const myStay = await stay.countDocuments({
      id: id,
      week: week,
    });
    if (myStay >= 1) {
      throw new Error("이미 잔류 신청을 하셨습니다.");
    }

    if (seat) {
      const studyroom = await collections.studyroom();
      const myStudyroom = await studyroom.findOne({
        grade: Math.floor(number / 1000),
        gender,
      });
      if (!myStudyroom) {
        throw new Error("해당 학년이 이용 가능한 열람실 구역이 없습니다.");
      }
      if(!myStudyroom.allow[seat[0]].includes(Number(seat[1]))) {
        throw new Error("해당 좌석은 허용되지 않습니다.");
      }
    }

    const put = await stay.insertOne({
      week: week,
      id: id,
      seat: seatData,
    });
    if (!put.insertedId) {
      throw new Error("잔류 신청을 하는 중 오류가 발생했습니다.");
    }
    
    const response = NextResponse.json<StayResponse>({
      success: true,
    });
    return response;
  }
  catch (e: any) {
    const response = NextResponse.json<StayResponse>({
      success: false,
      error: {
        title: "이럴수가...!",
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