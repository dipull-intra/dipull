"use client";

import React from "react";

import url from "@front/utils/url";

import Icons, { IconType } from "../icons";

import Button from "./button";

const menu: {
  type: "student" | "teacher" | "auth";
  groupName?: string;
  list: {
    icon: IconType;
    title: string;
    url: string;
  }[];
}[] = [
  {
    type: "student",
    list: [
      {
        icon: "Home",
        title: "홈",
        url: "/",
      },
      {
        icon: "Laundry",
        title: "세탁 & 건조",
        url: "/laundry",
      },
      {
        icon: "Hotel",
        title: "기상송",
        url: "/wakeup",
      },
      {
        icon: "Nights",
        title: "휴일 잔류",
        url: "/stay",
      },
      {
        icon: "Nature",
        title: "잔류 외출 및 급식",
        url: "/out",
      },
      {
        icon: "Icecream",
        title: "조기귀가",
        url: "/early",
      },
      {
        icon: "Hardware",
        title: "시설 수리",
        url: "/fix",
      }
    ]
  }
];

const Header = () => {
  return (
    <div className="flex flex-col flex-shrink-0 px-6 py-12 w-60 border-r border-key/8 h-full justify-between">
      <div className="w-full flex flex-col gap-12">
        <button className="w-fit button-scale">
          <div className="flex flex-row items-center gap-2">
            <Icons.Logo className="w-8 h-8 fill-key" />
            <h1 className="font-bold text-2xl">Dipull</h1>
          </div>
        </button>
        <div className="flex flex-col w-full gap-6">
          {
            menu[0].list.map((item, index) => (
              <Button
                key={index}
                icon={item.icon}
                title={item.title}
                url={url(item.url, menu[0].type)}
              />
            ))
          }
        </div>
      </div>

      <button className="button-scale">
        <div className="flex flex-row items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/100000000?s=200&v=4"
            alt=""
            className="bg-key/10 rounded-full w-8 h-8 object-cover"
          />
          <div className="flex flex-col gap-0.5 items-start">
            <p className="font-normal text-xs">3학년 6반 29번</p>
            <p>최재민</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Header;