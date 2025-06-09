"use client";

import React from "react";

import Icons from "@front/components/icons";

const Details = () => {
  const [opened, setOpened] = React.useState(true);
  return (
    <button className="w-full" onClick={() => setOpened(p => !p)}>
      <div className="w-full bg-key/5 rounded-xl p-5 flex flex-col gap-3 items-start justify-start">
        <div className="flex flex-row w-full items-center justify-between gap-2">
          <p className="font-semibold text-xl">[3학년] 학봉관 2층 왼쪽</p>
          <Icons.ArrowDown
            className={[
              "w-4 h-4 fill-key transition-transform duration-200",
              opened ? "rotate-180" : "rotate-0",
            ].join(" ")}
          />
        </div>
        {
          opened ? (
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="font-semibold">오후 6시 35분</p>
                <p className="font-normal">3629 최재민</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="font-semibold">오후 6시 35분</p>
                <p className="font-normal">3629 최재민</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="font-semibold">오후 6시 35분</p>
                <p className="font-normal">3629 최재민</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="font-semibold">오후 6시 35분</p>
                <p className="font-normal">3629 최재민</p>
              </div>
            </div>
          ) : null
        }
      </div>
    </button>
  );
};

export default Details;