import axios from "axios";
import * as jose from "jose";
import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { connectToDatabase } from "@/utils/db";
import { verify } from "@/utils/jwt";

import { ClientDataDB, ClientGet } from "../../(main)/type";
import { getJwtToken } from "../utils";

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

  const { clientId }: {
    clientId: string;
  }= await req.json();
  if(!clientId) return new NextResponse(JSON.stringify({
    message: "clientId가 존재하지 않습니다.",
  }), {
    status: 400,
    headers: new_headers,
  });

  const client = await connectToDatabase();
  const clientsCollection = client.db().collection<ClientDataDB>("clients");
  const objcet_id = ObjectId.createFromHexString(clientId);
  const clientData = await clientsCollection.findOne({ _id: objcet_id });
  if(!clientData) {
    return new NextResponse(JSON.stringify({
      message: "등록된 클라이언트가 아닙니다.",
    }), {
      status: 400,
      headers: new_headers,
    });
  }

  const objcet_id2 = ObjectId.createFromHexString(verified.payload.id);
  const dataCollection = client.db().collection("data");
  const getData = await dataCollection.findOne({ _id: objcet_id2 });
  
  if(!getData) return new NextResponse(JSON.stringify({
    message: "존재하는 계정이 아닙니다.",
  }), {
    status: 400,
    headers: new_headers,
  });

  const sendData: {
    [key in ClientGet]?: string;
  } = {};
  for(const get of clientData.get) {
    if(get === "id") sendData[get] = getData._id.toString();
    else sendData[get] = getData[get];
  }

  const jwt = await getJwtToken(sendData);
  
  return new NextResponse(JSON.stringify({
    token: jwt,
  }), {
    headers: new_headers,
  });

};

export default POST;