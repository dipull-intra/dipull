import axios from "axios";
import * as jose from "jose";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

import { connectToDatabase } from "@/utils/db";

import { ClientDataDB, ClientGet } from "../(main)/type";

import { getJwtToken } from "./utils";

const PUT = async (
  req: Request,
) => {
  // 헤더 설정
  const new_headers = new Headers();
  new_headers.append("Content-Type", "application/json; charset=utf-8");

  const { access_token, clientId, gender, name, number }: {
    access_token: string;
    clientId: string;
    gender: "male" | "female";
    name: string;
    number: number;
  }= await req.json();

  if(!access_token) return new NextResponse(JSON.stringify({
    message: "access_token이 존재하지 않습니다.",
  }), {
    status: 400,
    headers: new_headers,
  });
  if(!clientId) return new NextResponse(JSON.stringify({
    message: "clientId가 존재하지 않습니다.",
  }), {
    status: 400,
    headers: new_headers,
  });
  if(!gender) return new NextResponse(JSON.stringify({
    message: "성별을 선택 해주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });
  if(!name) return new NextResponse(JSON.stringify({
    message: "이름을 입력 해주세요.",
  }), {
    status: 400,
    headers: new_headers,
  });
  if(!number || number >= 4000) return new NextResponse(JSON.stringify({
    message: "학번을 입력 해주세요.",
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

  const googleResponse = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if(googleResponse.status !== 200) return new NextResponse(JSON.stringify({
    message: "구글 서버에서 정보를 가져오는데 실패했습니다.",
  }), {
    status: 400,
    headers: new_headers,
  });

  if(googleResponse.data.email.split("@")[1] !== "dimigo.hs.kr") return new NextResponse(JSON.stringify({
    message: "디미고 구글 계정만 가입 가능합니다.",
  }), {
    status: 400,
    headers: new_headers,
  });

  const dataCollection = client.db().collection("data");
  const userData = await dataCollection.findOne({ email: googleResponse.data.email });
  if(userData) {
    return new NextResponse(JSON.stringify({
      message: "이미 등록된 사용자입니다.",
    }), {
      status: 400,
      headers: new_headers,
    });
  }
  const newData = {
    email: googleResponse.data.email,
    gender, name, number,
    type: "student",
    profile_image: googleResponse.data.picture,
  };
  const insertAndGet = await dataCollection.insertOne(newData);

  const sendData: {
    [key in ClientGet]?: string;
  } = {};
  for(const get of clientData.get) {
    if(get === "id") sendData[get] = insertAndGet.insertedId.toString();
    else sendData[get] = newData[get];
  }

  const jwt = await getJwtToken(sendData);

  return new NextResponse(JSON.stringify({
    token: jwt,
    message: "성공적으로 계정을 추가하였습니다.",
  }), {
    headers: new_headers,
  });
};

export default PUT;