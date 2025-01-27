"use server";

import * as jose from "jose";

import { ClientType } from "@/app/oauth/(main)/type";
import { connectToDatabase } from "@/utils/db";
import { refresh, sign } from "@/utils/jwt";

import type { DB_userData, TokenInfo, UserData } from "../type";

export const getTokens = async (token: string) => {
  const public_key = process.env.OAUTH_JWT_PUBLIC || "";
  const public_key_encodes = await jose.importSPKI(public_key, "RS256");

  // 디풀 토큰 디코딩
  const decodedToken = await jose.jwtVerify(token, public_key_encodes);
  const data = decodedToken.payload as {
    data: ClientType;
    iss: string;
    aud: string;
    iat: number;
    exp: number;
  };

  // refresh, access 토큰 발급
  const refreshData: UserData = {
    id: data.data.id,
    type: data.data.type as "teacher" | "student",
    profile_image: data.data.profile_image,
    gender: data.data.gender,
    name: data.data.name,
    number: Number(data.data.number),
  };

  const refreshToken = await refresh(refreshData);

  const update_data: DB_userData = {
    ...refreshData,
    refreshToken,
  };

  const accessTokenValue: TokenInfo = {
    id: update_data.id,
    data: {
      id: update_data.id,
      type: data.data.type as "teacher" | "student",
      profile_image: update_data.profile_image,
      gender: update_data.gender,
      name: update_data.name,
      number: update_data.number,
    }
  };

  const accessToken = await sign(accessTokenValue);
    
  // DB 업데이트
  const client = await connectToDatabase();
  const userCollection = client.db().collection("users");
  const query = { id: data.data.id };
  const update = {
    $set: update_data,
  };
  const options = { upsert: true };
  await userCollection.updateOne(query, update, options);

  return {
    refreshToken,
    accessToken
  };
};