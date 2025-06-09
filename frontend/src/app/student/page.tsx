"use client";

import React from "react";

import IconTitle from "@front/components/iconTitle";
import Input from "@front/components/input";
import Label from "@front/components/label";
import Select from "@front/components/select";

const Home = () => {
  return (
    <div className="w-full p-6 max-md:p-4 flex flex-col gap-9">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 w-full max-w-lg max-md:max-w-full">
          <IconTitle icon="Meal">급식</IconTitle>
          <Input
            label="날짜 선택"
            type="date"
          />
        </div>

        <div className="flex flex-row max-md:flex-col gap-14 max-md:gap-4 items-start justify-start w-full">
          <Label text="아침" fit>
            <div className="flex flex-col items-start gap-1">
              <p className="">·  밥, 김치, 된장찌개</p>
              <p className="">·  밥, 김치, 된장찌개</p>
              <p className="">·  밥, 김치, 된장찌개</p>
            </div>
          </Label>
          <Label text="점심" fit>
            <div className="flex flex-col items-start gap-1">
              <p className="">·  밥, 김치, 된장찌개</p>
              <p className="">·  밥, 김치, 된장찌개</p>
              <p className="">·  밥, 김치, 된장찌개</p>
            </div>
          </Label>
          <Label text="저녁" fit>
            <div className="flex flex-col items-start gap-1">
              <p className="">·  밥, 김치, 된장찌개</p>
              <p className="">·  밥, 김치, 된장찌개</p>
              <p className="">·  밥, 김치, 된장찌개</p>
            </div>
          </Label>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 w-full max-w-lg max-md:max-w-full">
          <IconTitle icon="Calendar">시간표</IconTitle>
          <Label text="학년 반 선택">
            <div className="w-full flex flex-row gap-1">
              <Select.Col
                placeholder="학년"
                options={["1학년", "2학년", "3학년"]}
                values={["1", "2", "3"]}
              />
              <Select.Col
                placeholder="반"
                options={["1반", "2반", "3반", "4반", "5반", "6반"]}
                values={["1", "2", "3", "4", "5", "6"]}
              />
            </div>
          </Label>
        </div>

        <div className="w-full max-w-lg max-md:max-w-full border border-key/10 rounded-xl flex flex-col">
          <div className="grid grid-cols-[32px_repeat(5,1fr)]">
            <div className="flex flex-col items-center justify-center gap-1 py-2 border-r border-key/10" />
            <div className="flex flex-col items-center justify-center gap-1 py-2">
              <p className="text-sm text-key/30">월</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 py-2">
              <p className="text-sm text-key/30">화</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 py-2">
              <p className="text-sm text-key/30">수</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 py-2">
              <p className="text-sm text-key/30">목</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 py-2">
              <p className="text-sm text-key/30">금</p>
            </div>
          </div>
          {
            Array.from({ length: 7 }, (_, i) => (
              <div className="grid grid-cols-[32px_repeat(5,1fr)] border-t border-key/10" key={i}>
                <div className="flex flex-col items-center justify-center gap-1 py-3 border-r border-key/10">
                  <p className="text-sm text-key/30">{i + 1}</p>
                </div>
                {
                  Array.from({ length: 5 }, (_, j) => (
                    <div className="flex flex-col items-center justify-center gap-1 py-3" key={j}>
                      <p className="text-sm">컴공</p>
                      <p className="text-xs text-key/30">최재□</p>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>



    </div>
  );
};

export default Home;