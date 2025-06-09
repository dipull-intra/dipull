import React from "react";

import Button from "@front/components/button";
import IconTitle from "@front/components/iconTitle";
import Input from "@front/components/input";
import Label from "@front/components/label";
import Select from "@front/components/select";

const SchedulePage = () => { 
  return (
    <div className="w-full p-6 max-md:p-4 flex flex-col gap-8">
      <div className="flex flex-col items-start gap-3 w-full max-w-lg max-md:max-w-full">
        <IconTitle icon="Nights">일정 설정</IconTitle>
        <Label text="잔류 기간 설정">
          <div className="flex flex-row items-center gap-2">
            <Input
              type="date"
              placeholder="잔류 시작 날짜"
            />
            <p className="text-key/20">~</p>
            <Input
              type="date"
              placeholder="잔류 종료 날짜"
            />
          </div>
        </Label>
        <Label text="잔류 신청 기간 설정">
          <div className="flex flex-row items-center gap-2">
            <Input
              type="date"
              placeholder="신청 시작 날짜"
            />
            <p className="text-key/20">~</p>
            <Input
              type="date"
              placeholder="신청 종료 날짜"
            />
          </div>
        </Label>
      </div>

      <div className="flex flex-col items-start gap-3 w-full max-w-lg max-md:max-w-full">
        <IconTitle icon="Present">잔류 위치</IconTitle>
        <Select.Row
          label="1학년"
          options={["열람실", "교실"]}
          values={["studyroom", "classroom"]}
        />
        <Select.Row
          label="2학년"
          options={["열람실", "교실"]}
          values={["studyroom", "classroom"]}
        />
        <Select.Row
          label="3학년"
          options={["열람실", "교실"]}
          values={["studyroom", "classroom"]}
        />
      </div>

      <div className="flex flex-col items-start gap-3 w-full max-w-lg max-md:max-w-full">
        <IconTitle icon="School">열람실 신청 내역 교실로 변경하기</IconTitle>
        <div className="flex flex-row items-center gap-2 w-full">
          <Button fill={false}>1학년</Button>
          <Button fill={false}>2학년</Button>
          <Button fill={false}>3학년</Button>
        </div>
      </div>


      <div className="w-full max-w-lg max-md:max-w-full">
        <Button>저장하기</Button>
      </div>
    </div>
  );
};

export default SchedulePage;