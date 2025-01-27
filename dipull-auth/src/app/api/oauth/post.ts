import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { ClientDataDBString } from "@/app/oauth/(main)/type";
import { connectToDatabase } from "@/utils/db";
import { verify } from "@/utils/jwt";

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

  const get: ClientDataDBString = await req.json();
  if(!get.name) return new NextResponse(JSON.stringify({
    message: "서비스 이름을 입력해 주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });
  if(!get.redirect.length) return new NextResponse(JSON.stringify({
    message: "하나 이상의 리다이렉트 URI를 입력해 주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });
  if(!get.get.length) return new NextResponse(JSON.stringify({
    message: "하나 이상의 정보 유형을 선택해 주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });
  if(!get.get.includes("id")) return new NextResponse(JSON.stringify({
    message: "식별번호는 필수 선택입니다.",
  }), {
    status: 400,
    headers: new_headers,
  });

  const client = await connectToDatabase();
  const clientsCollection = client.db().collection("clients");
  const objcet_id = ObjectId.createFromHexString(get._id);
  const update = await clientsCollection.updateOne({ 
    _id: objcet_id,
    owner: verified.payload.id,
  }, {
    $set: {
      name: get.name,
      redirect: get.redirect,
      get: get.get,
    },
  });

  if(update.matchedCount === 0) {
    return new NextResponse(JSON.stringify({
      message: "일치하는 클라이언트가 없습니다.",
    }), {
      status: 400,
      headers: new_headers,
    });
  }
  else if(update.modifiedCount === 0) {
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

export default POST;