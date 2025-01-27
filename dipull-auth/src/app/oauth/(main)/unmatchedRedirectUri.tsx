import React from "react";

import Insider from "@/provider/insider";

const UnmatchedRedirectUri = ({
  redirect,
}: {
  redirect: string;
}) => {
  return (
    <Insider className="flex flex-col items-center justify-center h-[100vh]">
      <div className="bg-white rounded-xl p-6 flex flex-col gap-6 w-full max-w-[26rem]">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-text/50">오류 발생</p>
          <div className="flex flex-row text-xl font-semibold">
            <p className="text-[#EF4444]">리다렉트 URI이 정확하지 않아요.</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-text/50">오류 정보</p>
          <p className="text-base font-medium">redirect 값이 잘못되었습니다.</p>
          <p className="text-base font-medium">로그인 하려는 웹 사이트의 개발자에게 문의해주세요.</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-text/50">받아온 redirect 값</p>
          <p className="text-base font-medium">{redirect || "undefined"}</p>
        </div>
      </div>
    </Insider>
  );
};

export default UnmatchedRedirectUri;