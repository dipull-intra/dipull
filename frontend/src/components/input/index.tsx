"use client";

import React from "react";

import Label from "../label";

export type InputProps = {
  label?: string;
  children?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label = "",
  children,
  ...props
}: InputProps) => { 

  return (
    <Label text={label}>
      <div className="w-full flex flex-row items-center gap-2">
        <input
          className={[
            "w-full h-[43px] px-4 py-3 rounded-xl outline outline-key/20 placeholder:text-key/20",
            "focus:outline-key/75 focus:outline-2 transition-all duration-200",
            props.disabled ? "bg-key/10 cursor-not-allowed" : "",
            props.className,
          ].join(" ")}
          {...props}
        />
        {children}
      </div>
    </Label>
  );
};

export default Input;