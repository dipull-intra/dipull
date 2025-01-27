import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { connectToDatabase } from "@/utils/db";
import { verify } from "@/utils/jwt";

const PUT = async (
  req: Request,
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

  const { gender, name, number }: {
    gender: "male" | "female";
    name: string;
    number: number;
  }= await req.json();

  if(!gender) return new NextResponse(JSON.stringify({
    message: "성별을 입력해 주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });
  if(!name) return new NextResponse(JSON.stringify({
    message: "이름을 입력해 주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });
  if(!number) return new NextResponse(JSON.stringify({
    message: "학번을 입력해 주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });

  const client = await connectToDatabase();
  const dataCollection = client.db().collection("data");
  const objcet_id = ObjectId.createFromHexString(verified.payload.id);

  const getMine = await dataCollection.findOne({ _id: objcet_id });
  if(getMine?.type === "student" && number >= 4000) return new NextResponse(JSON.stringify({
    message: "올바른 학번을 입력해 주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });

  const update = await dataCollection.updateOne({ _id: objcet_id }, {
    $set: {
      gender, name, number,
    },
  });

  if(update.modifiedCount === 0) {
    return new NextResponse(JSON.stringify({
      message: "수정된 정보가 없습니다.",
    }), {
      status: 400,
      headers: new_headers,
    });
  }
  else {
    return new NextResponse(JSON.stringify({
      message: "정보가 수정되었습니다.",
    }), {
      status: 200,
      headers: new_headers,
    });
  }
};

export default PUT;