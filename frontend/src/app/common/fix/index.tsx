"use client";

import Link from "next/link";
import React from "react";

import Button from "@front/components/button";
import Icons from "@front/components/icons";
import IconTitle from "@front/components/iconTitle";
import url, { useCurrentUrlType } from "@front/utils/url";

const Fix = () => {
  const currentType = useCurrentUrlType();

  return (
    <div className="w-full p-6 max-md:p-4 flex flex-col gap-9">
      <IconTitle icon="Hardware">시설 수리 신청</IconTitle>

      <div className="flex flex-col gap-3 w-full">
        {
          Array.from({ length: 10 }).map((_, i) => (
            <React.Fragment key={i}>
              <div className="w-full border-t border-key/8" />
              <Link href={url("/fix/details", currentType)} className="w-full">
                <button className="group cursor-pointer">
                  <div className="flex flex-col gap-1 px-2">
                    <p className="group-hover:underline">ㅇㅇ층 ㅇㅇ 화장실 고장났어여</p>
                    <p className="text-xs font-normal text-key/30 group-hover:underline">1학년 익명 · 2024.03.02 · 진행 중</p>
                  </div>
                </button>
              </Link>
            </React.Fragment>
          ))
        }
        <div className="w-full border-t border-key/8" />
        <div className="flex flex-row items-center justify-end">
          <Button
            scale="small"
            label="글쓰기"
            fit
          >
            <Icons.Edit className="w-3 h-3 fill-background" />
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Fix;