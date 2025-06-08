"use client";

import React from "react";

import Button from "@front/components/button";
import Icons from "@front/components/icons";
import IconTitle from "@front/components/iconTitle";
import Input from "@front/components/input";
import Label from "@front/components/label";

import Element from "./element";
import Search from "./search";

const Wakeup = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col gap-9 overflow-y-auto">
      <div className="flex flex-col gap-4">
        <IconTitle icon="Hotel">신청곡 검색하기</IconTitle>
        <div className="w-full max-w-lg">
          <Input
            type="text"
            label="검색어 입력"
            placeholder="검색어를 입력하세요."
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            <div className="w-28 flex-shrink-0">
              <Button label="검색하기">
                <Icons.Search className="w-4 h-4" />
              </Button>
            </div>
          </Input>
        </div>
        <Label text="검색 결과">
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex flex-row items-center justify-start gap-2 w-max">
              <Search />
              <Search />
              <Search />
              <Search />
              <Search />
              <Search />
              <Search />
              <Search />
            </div>
          </div>
        </Label>
      </div>

      <div className="w-full flex flex-col gap-4">
        <IconTitle icon="Article">이번주 신청곡 순위</IconTitle>
        <Element />
        <Element />
        <Element />
        <Element />
      </div>
      
    </div>
  );
};

export default Wakeup;