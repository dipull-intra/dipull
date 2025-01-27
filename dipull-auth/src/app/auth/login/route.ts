import { serialize } from "cookie";
import moment from "moment";
import { NextResponse } from "next/server";
import "moment-timezone";

import { getTokens } from "./server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url!);
  const token = searchParams.get("token") || "";

  const { refreshToken, accessToken } = await getTokens(token);

  const refreshTokenCookie = serialize("refreshToken", refreshToken, {
    path: "/",
    expires: moment().tz("Asia/Seoul").add(30, "days").toDate(),
    httpOnly: true,
  });
  const accessTokenCookie = serialize("accessToken", accessToken, {
    path: "/",
    expires: moment().tz("Asia/Seoul").add(1, "days").toDate(),
    httpOnly: true,
  });

  const headers = new Headers();
  headers.append("Content-Type", "application/json; charset=utf-8");
  headers.append("Set-Cookie", refreshTokenCookie);
  headers.append("Set-Cookie", accessTokenCookie);

  return new NextResponse(JSON.stringify({
    message: "로그인 성공.",
    accessToken: accessToken
  }), {
    status: 200,
    headers: headers
  });
};