import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { UserDB } from "@/app/auth/type";
import { connectToDatabase } from "@/utils/db";
import { verify } from "@/utils/jwt";

import { DataDB } from "../userinfo/utils";

const POST = async (
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

  const client = await connectToDatabase();
  const userCollection = client.db().collection("users");
  const selectMember = await userCollection.findOne({ id: verified.payload.data.id }) as unknown as UserDB;
  if(selectMember.type !== "teacher") return new NextResponse(JSON.stringify({
    message: "교사만 접근 가능합니다.",
  }), {
    status: 403,
    headers: new_headers
  });

  const { id } = await req.json();

  if(!id) return new NextResponse(JSON.stringify({
    message: "선생님을 선택해주세요.",
  }), {
    status: 400,
    headers: new_headers
  });

  const dataCollection = client.db().collection("data");
  const usersCollection = client.db().collection("users");
  const objectid = ObjectId.createFromHexString(id);

  const select = await dataCollection.findOne({ _id: objectid }) as unknown as DataDB;
  if (select.email.split("@")[1] !== "dimigo.hs.kr") return new NextResponse(JSON.stringify({
    message: "관리자 권한을 삭제할 수 없습니다. (개발자 계정임)",
  }), {
    status: 400,
    headers: new_headers
  });

  const updateUserArr = [
    dataCollection.updateOne({ _id: objectid }, {
      $set: {
        type: "student",
        number: 1101,
      }
    }),
    usersCollection.updateOne({ id }, {
      $set: {
        type: "student",
        number: 1101,
      }
    })
  ];
  await Promise.all(updateUserArr);

  return new NextResponse(JSON.stringify({
    message: "선생님 권한을 삭제했습니다.",
  }), {
    status: 200,
    headers: new_headers
  });
};

export default POST;