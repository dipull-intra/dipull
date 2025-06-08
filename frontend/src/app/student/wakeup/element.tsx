import React from "react";

import Button from "@front/components/button";
import Icons from "@front/components/icons";

const Element = () => {
  return (
    <div className="w-full flex flex-row items-center gap-4">
      <img
        src="https://i.ytimg.com/vi/b8ezAbI4H-M/sddefault.jpg"
        alt="기상송 검색 썸네일"
        className="object-cover aspect-video h-32 bg-key/5 rounded-xl transition-all duration-100 peer peer-hover:opacity-80"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row items-center gap-1.5 w-full">
            <Icons.Vote className="w-5 h-5 fill-key" />
            <p className="font-semibold text-xl">1위 · 12,333표</p>
          </div>
          <div className="flex flex-col gap-1 w-full group select-none button-real-only-scale">
            <p className="text-ellipsis font-semibold line-clamp-1 group-hover:underline w-full">
              [11회 풀버전] 유다빈밴드 - 좋지 아니한가 @ FINAL ROUND Full ver.#GreatSeoulInvasion EP.11
            </p>
            <p className="font-normal text-xs group-hover:underline">조회수 118,021회 · 2년 전</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 w-full">
          <Button
            disabled
            scale="small"
            fit
          >오늘 내가 투표한 노래</Button>
          <Button
            scale="small"
            fit
          >나도 투표하기</Button>
        </div>
      </div>
    </div>
  );
};

export default Element;
