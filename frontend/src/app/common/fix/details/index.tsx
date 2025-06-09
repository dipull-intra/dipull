"use client";

import Link from "next/link";
import React from "react";

import Icons from "@front/components/icons";
import IconTitle from "@front/components/iconTitle";
import Label from "@front/components/label";
import url from "@front/utils/url";

const FixDetails = () => {
  return (
    <div className="w-full p-6 max-md:p-4 flex flex-col gap-6">
      <IconTitle icon="Hardware">시설 수리 신청</IconTitle>
      <div className="flex flex-col gap-3 w-full">
        <Link href={url("/fix", "student")}>
          <button className="button-scale w-fit">
            <div className="flex flex-row gap-1 items-center">
              <Icons.Back className="w-6 h-6 fill-key" />
              <p>이전으로</p>
            </div>
          </button>
        </Link>
        <div className="w-full border-t border-key/8" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl">ㅇㅇ층 ㅇㅇ 화장실 고장났어여</p>
        <p className="text-xs font-normal text-key/30">2024년 06월 05일 · 3629 최재민 · 남학생</p>
      </div>
      <div className="w-full border-t border-key/8" />
      <p className="font-normal">안녕하세요! x학년 x반 ㅇㅇㅇ입니다!<br />학봉관 x층 화장실 xx칸이 고장나 수리 신청 남깁니다!</p>
      <div className="w-full border-t border-key/8" />
      <Label text="처리 상태">
        <p className="text-2xl font-semibold">처리 중</p>
      </Label>
    </div>
  );
};

export default FixDetails;