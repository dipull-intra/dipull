import "moment-timezone";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

import { ErrorMessage } from "@/components/providers/utils";
import { checkWeekend } from "@/utils/date";
import { collections } from "@/utils/db";
import { Machine_Time } from "@/utils/db/utils";

import { MachineType } from "../utils";

export const GET = async (
  req: NextRequest,
  { params }: { params: { type: MachineType } }
) => {
  try {
    const today = moment().tz("Asia/Seoul").format("YYYY-MM-DD");
    const isWeekend = await checkWeekend(today);

    const machine_time = await collections.machine_time();
    const machineTime = await machine_time.findOne({
      type: params.type,
      when: isWeekend ? "weekend" : "default",
    });
  
    const response = NextResponse.json<Machine_Time["time"]>(machineTime?.time || []);
    return response;
  }
  catch (e: any) {
    const response = NextResponse.json<{
      error: ErrorMessage;
    }>({
      error: {
        title: "시간 조회를 실패했어요.",
        description: e.message,
      },
    }, {
      status: 400,
    });
    console.error(e.message);
    return response;
  }
  
};
