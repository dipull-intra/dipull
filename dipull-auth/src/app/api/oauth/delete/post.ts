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

  const { _id }: {
    _id: ClientDataDBString["_id"];
  } = await req.json();
  if(!_id) return new NextResponse(JSON.stringify({
    message: "서비스를 선택해 주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });

  const client = await connectToDatabase();
  const clientsCollection = client.db().collection("clients");
  const objcet_id = ObjectId.createFromHexString(_id);
  const del = await clientsCollection.deleteOne({ 
    _id: objcet_id,
    owner: verified.payload.id,
  });

  if(del.deletedCount === 0) {
    return new NextResponse(JSON.stringify({
      message: "서비스 삭제에 실패했습니다.",
    }), {
      status: 500,
      headers: new_headers,
    });
  }
  else {
    return new NextResponse(JSON.stringify({
      message: "서비스가 삭제되었습니다.",
    }), {
      status: 200,
      headers: new_headers,
    });
  }
};

export default POST;