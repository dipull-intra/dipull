import React from "react";

const Button = (
  {
    label,
    scale = "big",
    fit = false,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
    scale?: "big" | "small";
    fit?: boolean;
  }
) => {
  return (
    <button
      className={[
        "bg-key rounded-xl overflow-hidden",
        props.disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer button-only-scale",
        fit ? "w-fit" : "w-full",
        props.className,
      ].join(" ")}
      {...props}
    >
      <div className={[
        "flex flex-row gap-2 items-center justify-center",
        fit ? "w-fit" : "w-full",
        scale === "big" ? "py-3 px-4 h-[43px]"  : "py-2 px-4",
      ].join(" ")}>
        {
          typeof props.children === "string" ? (
            <p className={[
              "font-semibold text-background",
              scale === "big" ? "text-base" : "text-xs",
            ].join(" ")}>
              {props.children}
            </p>
          ): props.children
        }
        {
          label ? (
            <p className={[
              "font-semibold text-background",
              scale === "big" ? "text-base" : "text-xs",
            ].join(" ")}>
              {label}
            </p>
          ) : null
        }
      </div>
    </button>
  );
};

export default Button;