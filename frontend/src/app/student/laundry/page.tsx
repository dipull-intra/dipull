"use client";

import React from "react";

import Button from "@front/components/button";
import IconTitle from "@front/components/iconTitle";
import Select from "@front/components/select";

import Details from "./details";

const Laundry = () => {
  const [type, setType] = React.useState<string>("세탁");
  return (
    <div className="w-full h-full p-6 flex flex-col gap-9 overflow-y-auto">
      <div className="flex flex-col gap-2">
        <IconTitle icon="Machine">유형 선택하기</IconTitle>
        <div className="w-full max-w-80">
          <Select.Row
            value={type}
            options={["세탁", "건조"]}
            onClick={(value) => {
              setType(value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-md">
        <IconTitle icon="Beenhere">예약하기</IconTitle>

        <div className="flex flex-col gap-3 w-full">
          <Select.Col
            label={`${type}기 선택`}
            placeholder={`${type}기를 선택하세요.`}
            options={["세탁기 1", "세탁기 2", "세탁기 3"]}
          />
          <Select.Col
            label={`${type} 시간 선택`}
            placeholder={`${type} 시간을 선택하세요.`}
            options={["세탁기 1", "세탁기 2", "세탁기 3"]}
          />
          <Button>신청하기</Button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <IconTitle icon="Article">예약 목록</IconTitle>
        <div className="grid gap-4 self-stretch grid-cols-2 items-start">
          <Details />
          <Details />
          <Details />
          <Details />
        </div>
      </div>


    </div>
  );
};

export default Laundry;