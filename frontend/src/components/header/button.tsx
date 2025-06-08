import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import Icons, { IconType } from "../icons";

const Button = (
  {
    icon = "Home",
    title = "홈",
    url = "",
    ...props
  }: {
    icon?: IconType;
    clicked?: boolean;
    title?: string;
    url?: string;
  }
  & React.HTMLAttributes<HTMLButtonElement> 
) => { 
  const Icon = React.useMemo(() => {
    return Icons[icon];
  }, [icon]);
  const pathname = usePathname();
  const clicked = React.useMemo(() => {
    const normalize = (str: string) => str.replace(/\/$/, "");
    return normalize(pathname) === normalize(url);
  }, [pathname, url]);

  return (
    <Link
      href={url}
      className="w-full"
    >
      <button {...props} className={["w-full button-scale", props.className].join(" ")}>
        <div className="w-full flex flex-row items-center justify-start max-md:justify-end gap-2">
          <Icon className="w-6 h-6 fill-key" fill={clicked} />
          <h2 className={[
            "text-lg",
            clicked ? "font-bold" : "",
          ].join(" ")}>{title}</h2>
        </div>
      </button>
    </Link>
  );
};

export default Button;