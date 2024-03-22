import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { HomecomingDB } from "@/app/api/homecoming/utils";
import { getApplyStartDate } from "@/app/api/stay/utils";
import { UserDB } from "@/app/auth/type";
import { connectToDatabase } from "@/utils/db";
import { verify } from "@/utils/jwt";

type Params = {
  owner: string;
};

const GET = async (
  req: Request,
  { params }: { params: Params }
) => {
  // 헤더 설정
  const new_headers = new Headers();
  new_headers.append("Content-Type", "application/json; charset=utf-8");
  
  // Authorization 헤더 확인
  const authorization = headers().get("authorization");
  const verified = await verify(authorization?.split(" ")[1] || "");
  if(!verified.ok || !verified.payload?.id) return new NextResponse(JSON.stringify({
    message: "로그인이 필요합니다.",
  }), {
    status: 401,
    headers: new_headers
  });
  const client = await connectToDatabase();
  const userCollection = client.db().collection("users");
  const selectMember = await userCollection.findOne({ id: verified.payload.data.id }) as unknown as UserDB;
  if(selectMember.type !== "teacher") return new NextResponse(JSON.stringify({
    message: "교사만 접근 가능합니다.",
  }), {
    status: 403,
    headers: new_headers
  });

  if(!params.owner) return new NextResponse(JSON.stringify({
    success: false,
    message: "학생을 선택해주세요.",
  }), {
    status: 400,
    headers: new_headers
  });

  const homecomingCollection = client.db().collection("homecoming");
  const my = { id: params.owner, week: await getApplyStartDate() };
  const data = await homecomingCollection.findOne(my) as unknown as HomecomingDB;

  return new NextResponse(JSON.stringify({
    ok: true,
    data: {
      id: data?._id || params.owner,
      reason: data?.reason || "",
      time: data?.time || "",
    },
  }), {
    status: 200,
    headers: new_headers
  });
};

export default GET;