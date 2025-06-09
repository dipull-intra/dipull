import React from "react";

const Button = (
  {
    label,
    scale = "big",
    fit = false,
    fill = true,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label?: string;
    scale?: "big" | "small";
    fit?: boolean;
    fill?: boolean;
  }
) => {
  return (
    <button
      className={[
        "rounded-xl overflow-hidden",
        fill ? "bg-key" : "border border-key/20",
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
              fill ? "text-background" : "text-key",
            ].join(" ")}>
              {props.children}
            </p>
          ): props.children
        }
        {
          label ? (
            <p className={[
              "font-semibold max-md:hidden flex-shrink-0 whitespace-nowrap",
              scale === "big" ? "text-base" : "text-xs",
              fill ? "text-background" : "text-key",
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