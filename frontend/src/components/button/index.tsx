import React from "react";

const Button = (
  {
    label = "",
    ...props
  }: {
      label?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className={[
        "button-only-scale bg-key w-full rounded-xl overflow-hidden",
        props.className,
      ].join(" ")}
      {...props}
    >
      <div className="w-full h-[43px] flex items-center justify-center py-3 px-4">
        <p className="font-semibold text-background">{label}</p>
      </div>
    </button>
  );
};

export default Button;