"use client";

import React from "react";

import Icons, { IconType } from "../icons";

const IconTitle = (
  {
    icon = "Home",
    children,
  }: {
    icon: IconType;
      children?: Readonly<React.ReactNode>;
  }
) => {
  const Icon = React.useMemo(() => {
    return Icons[icon];
  }, [icon]);

  return (
    <div className="flex flex-row items-center gap-2">
      <Icon className="w-6 h-6 fill-key" fill defaultFill />
      <p className="font-bold text-xl">{ children }</p>
    </div>
  );
};

export default IconTitle;