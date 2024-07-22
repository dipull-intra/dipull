"use client";

import { usePathname } from "next/navigation";
import React from "react";

import Button from "./button";
import { Links } from "./links";

const Navigation = ({ 
  children
}: Readonly<{
  children: React.ReactNode;
}>) => { 
  const path = usePathname();
  const show = Links.some((link) => link.url.split("/")[1] === path.split("/")[1]);
  const findIndex = Links.findIndex((link) => link.url.split("/")[1] === path.split("/")[1]);
  const depth = path.split("/").length <= 2 + Links[findIndex].innerNavigationDeepth;
  const [width, setWidth] = React.useState(96);

  return (
    <>
      <div className={[
        "overflow-auto h-full",
        show && depth ? "pb-safe-offset-28" : "pb-safe-offset-6",
      ].join(" ")}>
        {children}
      </div>
      {
        show && depth ? (
          <div className="absolute bottom-8 w-full flex flex-row items-center justify-center">
            <div
              className={[
                "h-full transition-all absolute py-2",
              ].join(" ")}
              style={{
                width,
                transform: `translateX(${-112 + 56 * findIndex}px)`,
              }}
            >
              <div className="w-full h-full bg-white rounded-full" />
            </div>
            <div className="bg-text/80 rounded-full flex flex-row gap-0 items-center justify-center px-2">
              {
                Links.map((link) => (
                  <Button
                    key={link.url}
                    icon={link.icon}
                    text={link.text}
                    url={link.url}
                    setWidth={setWidth}
                  />
                ))
              }
            </div>
          </div>
        ) : null
      }
    </>
  );
};

export default Navigation;