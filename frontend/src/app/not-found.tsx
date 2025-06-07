"use client";

import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
      <p className="text-5xl font-bold">404 :(</p>
      <h1 className="text-2xl font-bold">페이지를 찾을 수 없습니다.</h1>
      <p className="text-lg text-key/40">
        요청하신 페이지가 존재하지 않거나, 잘못된 경로입니다.
      </p>
    </div>
  );
};

export default NotFound;