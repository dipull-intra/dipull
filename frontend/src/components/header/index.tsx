"use client";

import React from "react";

import { Types } from "@common/types";

import dayjs from "@front/utils/dayjs";
import url, { getCurrentUrlType } from "@front/utils/url";

import Icons, { IconType } from "../icons";

import Button from "./button";
import student from "./student";
import teacher from "./teacher";

export interface MenuProps {
  type: Types;
  groupName?: string;
  list: {
    icon: IconType;
    title: string;
    url: string;
  }[];
}

const Header = ({
  origin, pathname,
}: {
  origin: string;
  pathname: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const current = getCurrentUrlType(pathname, origin);
  const menus = React.useMemo(() => {
    switch (current) {
    case "student":
      return student;
    case "teacher":
      return teacher;
    default:
      return [];
    }
  }, [current]);

  return (
    <>
      <div
        className="w-10 h-10 fixed top-7.5 right-8 z-50 hidden max-md:flex items-center justify-center bg-key rounded-full button-scale border-2 border-background"
        onClick={() => setOpen(p => !p)}
      >
        <Icons.LogoToClose
          className="w-6 h-6"
          fillClassName="fill-background"
          fill={open}
        />
      </div>
      <div className={[
        "flex flex-col flex-shrink-0 px-6 py-12 w-60 border-r border-key/8 h-full justify-between",
        "max-md:border-0 max-md:justify-start gap-9 max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:h-full",
        "max-md:bg-background/80 max-md:backdrop-blur-lg max-md:z-40 max-md:py-6",
        "max-md:transition-all max-md:duration-500",
        open ? "max-md:translate-x-0" : "max-md:translate-x-full",
        "overflow-y-auto scrollbar-hide",
      ].join(" ")}>
        <div className="w-full flex flex-col gap-12 max-md:gap-9">
          <button className="w-fit button-scale">
            <div className="flex flex-row items-center gap-2">
              <Icons.Logo className="w-8 h-8 fill-key" />
              <div className="flex flex-row items-start gap-2">
                <h1 className="font-bold text-2xl">Dipull</h1>
                {
                  current === "teacher" ? (
                    <p className="font-normal text-xs">선생님용</p>
                  ) : current === "auth" ? (
                    <p className="font-normal text-xs">계정센터</p>
                  ) : null
                }
              </div>
            </div>
          </button>
          <div className="w-full flex flex-col gap-6">
            {
              menus.map((menu, jndex) => (
                <div key={jndex} className="w-full flex flex-col gap-2.5 items-start max-md:items-end">
                  {
                    menu.groupName ? (
                      <p className="text-xs font-semibold text-key/30 max-md:px-4">{menu.groupName}</p>
                    ) : null
                  }
                  <div className={[
                    "flex flex-col w-full",
                    menu.groupName ? "gap-3" : "gap-6 max-md:gap-3"
                  ].join(" ")}>
                    {
                      menu.list.map((item, index) => (
                        <Button
                          key={index}
                          icon={item.icon}
                          title={item.title}
                          url={url(item.url, menu.type)}
                          onClick={() => setOpen(false)}
                        />
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full max-md:px-4">
          <button className="button-scale">
            <div className="flex flex-row items-center gap-3 w-full justify-start max-md:justify-end">
              <img
                src="https://avatars.githubusercontent.com/u/100000000?s=200&v=4"
                alt=""
                className="bg-key/10 rounded-full w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-0.5 items-start max-md:items-end">
                <p className="font-normal text-xs">3학년 6반 29번</p>
                <p>최재민</p>
              </div>
            </div>
          </button>

          <div className="w-full border-t-0 border-key/8 flex flex-row max-md:justify-end gap-1">
            <p className="text-xs text-key/30">
                  © {dayjs().year()} <a href="https://github.com/jeamxn" className="text-xs text-key/30 hover:underline" target="_blank" rel="noopener noreferrer">JEAMXN</a>
            </p>
            <p className="text-xs text-key/30">·</p>
            <a href="https://docs.dimigo.net/terms/privacy" target="_blank" rel="noopener noreferrer">
              <p className="text-xs text-key/30 hover:underline">
                개인정보처리방침
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;