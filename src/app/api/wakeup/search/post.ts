import moment from "moment";
import "moment-timezone";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import youtubeSearch from "youtube-search";

import { connectToDatabase } from "@/utils/db";
import { verify } from "@/utils/jwt";

const opts: youtubeSearch.YouTubeSearchOptions = {
  maxResults: 5,
  key: process.env.YOUTUBE_API_KEY || "",
};

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
  const requestCollection = client.db().collection("request");
  const my = await requestCollection.findOne({ id: verified.payload.id });
  if(my?.last_search) {
    const this_ = moment(my?.last_search || 0, "x");
    const now = moment().tz("Asia/Seoul");
    if(now.diff(this_, "seconds") < 15) return new NextResponse(JSON.stringify({
      message: `검색은 15초에 한 번만 가능합니다. (${10 - now.diff(this_, "seconds")}초 남음)`,
    }), {
      status: 429,
      headers: new_headers
    });
  }

  const { query } = await req.json();
  if(!query) return new NextResponse(JSON.stringify({
    message: "검색어를 입력해주세요.",
  }), {
    status: 400,
    headers: new_headers
  });

  try{
    await requestCollection.updateOne({ id: verified.payload.id }, {
      $set: {
        last_search: moment().tz("Asia/Seoul").valueOf(),
      }
    }, {
      upsert: true
    });
    const search = await youtubeSearch(query, opts);
    return new NextResponse(JSON.stringify({
      message: "성공적으로 검색되었습니다.",
      search: search.results,
    }), {
      headers: new_headers
    });
  }
  catch(e: any){
    return new NextResponse(JSON.stringify({
      message: e.message,
    }), {
      status: 500,
      headers: new_headers
    });
  }

};

export default POST;