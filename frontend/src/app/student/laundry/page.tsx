import React from "react";

import ColSelect from "@front/components/colSelect";
import IconTitle from "@front/components/iconTitle";
import RowSelect from "@front/components/rowSelect";

const Laundry = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col gap-9">
      <div className="flex flex-col gap-2">
        <IconTitle icon="Machine">
          유형 선택하기
        </IconTitle>
        <div className="w-full max-w-80">
          <RowSelect list={["세탁", "건조"]} />
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-md">
        <IconTitle icon="Beenhere">
          예약하기
        </IconTitle>

        <div className="flex flex-col gap-3 w-full">
          <ColSelect
            label="세탁기 선택"
            placeholder="세탁기를 선택하세요."
            options={["세탁기 1", "세탁기 2", "세탁기 3"]}
          />
          <ColSelect
            label="세탁기 선택"
            placeholder="세탁기를 선택하세요."
            options={["세탁기 1", "세탁기 2", "세탁기 3"]}
          />
        </div>
      </div>

    </div>
  );
};

export default Laundry;