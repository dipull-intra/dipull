import axios from "axios";
import * as jose from "jose";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

import { connectToDatabase } from "@/utils/db";

import { ClientDataDB, ClientGet } from "../(main)/type";

import { getJwtToken } from "./utils";

const POST = async (
  req: Request,
) => {
  // 헤더 설정
  const new_headers = new Headers();
  new_headers.append("Content-Type", "application/json; charset=utf-8");

  const { access_token, clientId }: {
    access_token: string;
    clientId: string;
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

  const dataCollection = client.db().collection("data");
  const updateAndGet = await dataCollection.findOneAndUpdate({
    email: googleResponse.data.email,
  }, {
    $set: {
      profile_image: googleResponse.data.picture,
    },
  }, {
    returnDocument: "after",
  });
  if(!updateAndGet) {
    if(googleResponse.data.email.split("@")[1] !== "dimigo.hs.kr") {
      return new NextResponse(JSON.stringify({
        message: "디미고 구글 계정만 가입 가능합니다.",
      }), {
        status: 400,
        headers: new_headers,
      });
    }
    return new NextResponse(JSON.stringify({
      message: "등록된 사용자가 아닙니다.",
    }), {
      status: 400,
      headers: new_headers,
    });
  }

  const sendData: {
    [key in ClientGet]?: string;
  } = {};
  for(const get of clientData.get) {
    if(get === "id") sendData[get] = updateAndGet._id.toString();
    else sendData[get] = updateAndGet[get];
  }

  const jwt = await getJwtToken(sendData);

  return new NextResponse(JSON.stringify({
    token: jwt,
  }), {
    headers: new_headers,
  });

};

export default POST;