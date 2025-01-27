import { NextResponse } from "next/server";

const GET = async (
  req: Request,
) => {
  // 헤더 설정
  const new_headers = new Headers();
  new_headers.append("Content-Type", "text/plain; charset=utf-8");

  return new NextResponse(
    process.env.OAUTH_JWT_PUBLIC, 
    {
      headers: new_headers,
    }
  );
};

export default GET;