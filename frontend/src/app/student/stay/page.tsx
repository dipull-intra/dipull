"use client";

import Link from "next/link";
import React from "react";

import Button from "@front/components/button";
import IconTitle from "@front/components/iconTitle";
import Input from "@front/components/input";
import Label from "@front/components/label";
import Seat from "@front/components/seat";

const Stay = () => {
  const [reason, setReason] = React.useState("");
  const [selected, setSelected] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (!selected.length) return;
    setReason("");
  }, [selected]);

  return (
    <div className="w-full h-full p-6 flex flex-col gap-8 overflow-y-auto">
      <IconTitle icon="Nights">잔류 신청하기</IconTitle>

      <Seat
        selected={selected}
        setSelected={setSelected}
        available={["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A10"]}
        max={1}
      />

      <div className="w-full max-w-lg">
        <Input
          type="text"
          label="좌석 미선택 사유"
          placeholder="좌석 미선택 사유를 입력하세요."
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
          }}
          disabled={selected.length > 0}
        >
          <div className="w-28 flex-shrink-0">
            <Button
              onClick={() => {
                setReason("교실 잔류");
              }}
              disabled={selected.length > 0}
            >교실 잔류</Button>
          </div>
        </Input>
      </div>

      <Label text="잔류 신청 현황">
        <p><Link href="" className="underline" target="_blank">여기</Link>에서 잔류 신청 현황을 확인하세요!</p>
      </Label>

      <div className="w-full max-w-lg">
        <Button>신청하기</Button>
      </div>
    </div>
  );
};

export default Stay;