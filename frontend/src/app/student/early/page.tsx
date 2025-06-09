"use client";

import Link from "next/link";
import React from "react";

import { earlyTime, earlyTimeKorean } from "@common/const";
import { EarlyTime } from "@common/types";

import Button from "@front/components/button";
import IconTitle from "@front/components/iconTitle";
import Input from "@front/components/input";
import Label from "@front/components/label";
import Select from "@front/components/select";

const Early = () => {
  const [reason, setReason] = React.useState("");
  const [time, setTime] = React.useState<EarlyTime>("end-of-day");

  return (
    <div className="w-full p-6 max-md:p-4 flex flex-col gap-9">
      <IconTitle icon="Nights">조기귀가 신청하기</IconTitle>

      <div className="w-full max-w-lg max-md:max-w-full flex flex-col gap-6">
        <Label text="이번 주 조기 귀가일">
          <p className="font-bold text-xl">6월 5일 목요일</p>
        </Label>
        <Input
          type="text"
          label="조기귀가 사유"
          placeholder="조귀귀가 사유를 입력하세요."
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
          }}
        />
        <Select.Row
          label="귀가 시간 선택"
          options={earlyTimeKorean}
          values={earlyTime}
          value={time}
          onClick={(_v, _i, value) => {
            setTime(value as EarlyTime);
          }}
        />
        <Label text="잔류 신청 현황">
          <p><Link href="" className="underline" target="_blank">여기</Link>에서 조기귀가 신청 현황을 확인하세요!</p>
        </Label>
        <Button
          disabled={!reason || !time}
        >신청하기</Button>
      </div>

    </div>
  );
};

export default Early;