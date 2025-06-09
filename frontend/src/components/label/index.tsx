import React from "react";

const Label = (
  {
    text,
    children,
    fit = false,
  }: {
    text?: string;
    children?: React.ReactNode;
    fit?: boolean;
  }
) => { 
  return (
    <div className={[
      "flex flex-col gap-2",
      fit ? "w-fit" : "w-full",
    ].join(" ")}>
      {
        text ? (
          <p className="font-semi text-sm text-key/30">{text}</p>
        ) : null
      }
      {children}
    </div>
  );
};
export default Label;