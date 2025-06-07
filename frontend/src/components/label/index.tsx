import React from "react";

const Label = (
  {
    text,
    children,
  }: {
    text?: string;
    children?: React.ReactNode;
  }
) => { 
  return (
    <div className="w-full flex flex-col gap-2">
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