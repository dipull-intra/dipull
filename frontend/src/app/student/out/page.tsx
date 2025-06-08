"use client";

import React from "react";

import Button from "@front/components/button";
import Icons from "@front/components/icons";
import IconTitle from "@front/components/iconTitle";
import Input from "@front/components/input";
import Label from "@front/components/label";
import Select from "@front/components/select";
import dayjs from "@front/utils/dayjs";

import Meal from "./meal";

const Out = () => {
  const [meal, setMeal] = React.useState([
    {
      date: dayjs(),
      value: {
        breakfast: true,
        lunch: true,
        dinner: true,
      },
    },
    {
      date: dayjs().add(1, "day"),
      value: {
        breakfast: true,
        lunch: true,
        dinner: true,
      },
    }
  ]);
  return (
    <div className="w-full h-full p-6 max-md:p-4 flex flex-col gap-9 overflow-y-auto">
      <div className="flex flex-col gap-6 w-full max-w-lg max-md:max-w-full">
        <div className="flex flex-col gap-2">
          <IconTitle icon="Nature">외출 신청하기</IconTitle>
          <p className="text-key/30">하단의 저장하기 버튼을 눌러야 외출 및 급식변경 모두 반영됩니다!</p>
        </div>
      
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm">6월 6일 금요일</p>
            <button className="button-scale w-fit">
              <div className="flex flex-row gap-1.5 items-center">
                <p>ㅇㅇㅇㅇㅇ외출 (10:00~11:00)</p>
                <Icons.Close className="w-4 h-4 fill-key" />
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">6월 6일 금요일</p>
            <button className="button-scale w-fit">
              <div className="flex flex-row gap-1.5 items-center">
                <p>ㅇㅇㅇㅇㅇ외출 (10:00~11:00)</p>
                <Icons.Close className="w-4 h-4 fill-key" />
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm">6월 6일 금요일</p>
            <button className="button-scale w-fit">
              <div className="flex flex-row gap-1.5 items-center">
                <p>ㅇㅇㅇㅇㅇ외출 (10:00~11:00)</p>
                <Icons.Close className="w-4 h-4 fill-key" />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Select.Row
            label="날짜 선택"
            options={["6/6 (금)", "6/7 (토)", "6/8 (일)"]}
          />
          <Label text="외출 시간">
            <div className="flex flex-row items-center gap-2">
              <Input
                type="time"
                placeholder="시작 시간"
              />
              <p className="text-key/20">~</p>
              <Input
                type="time"
                placeholder="종료 시간"
              />
            </div>
          </Label>

          <Input
            label="외출 사유"
            placeholder="외출 사유를 입력하세요."
          />
          
        </div>

        <Button>추가하기</Button>
      </div>

      
      <div className="flex flex-col gap-6">
        <IconTitle icon="Meal">급식 변경하기</IconTitle>
        <div className="flex flex-col gap-4">
          <Meal data={meal} setData={setMeal} />
        </div>
      </div>

      
      <div className="w-full max-w-lg max-md:max-w-full">
        <Button>저장하기</Button>
      </div>
    </div>
  );
};

export default Out;