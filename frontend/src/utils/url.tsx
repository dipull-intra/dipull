import { usePathname } from "next/navigation";
import React from "react";

const url = (u: string, type: "student" | "teacher" | "auth") => {
  if (
    typeof window === "undefined" ||
    !process.env.NEXT_PUBLIC_ORIGIN_STUDENT ||
    !process.env.NEXT_PUBLIC_ORIGIN_TEACHER ||
    !process.env.NEXT_PUBLIC_ORIGIN_AUTH
  ) {
    switch (type) {
    case "student":
      return `/student${u}`;
    case "teacher":
      return `/teacher${u}`;
    case "auth":
      return `/auth${u}`;
    }
  }
  else {
    switch (type) {
    case "student":
      return `${process.env.NEXT_PUBLIC_ORIGIN_STUDENT}${u}`;
    case "teacher":
      return `${process.env.NEXT_PUBLIC_ORIGIN_TEACHER}${u}`;
    case "auth":
      return `${process.env.NEXT_PUBLIC_ORIGIN_AUTH}${u}`;
    }
  }
};

export const getCurrentUrlType = (pathname: string, origin: string) => {
  if (
    !process.env.NEXT_PUBLIC_ORIGIN_STUDENT ||
    !process.env.NEXT_PUBLIC_ORIGIN_TEACHER ||
    !process.env.NEXT_PUBLIC_ORIGIN_AUTH
  ) {
    if (pathname.startsWith("/student")) {
      return "student";
    }
    if (pathname.startsWith("/teacher")) {
      return "teacher";
    }
    if (pathname.startsWith("/auth")) {
      return "auth";
    }
  } else {
    switch (origin) {
    case process.env.NEXT_PUBLIC_ORIGIN_STUDENT:
      return "student";
    case process.env.NEXT_PUBLIC_ORIGIN_TEACHER:
      return "teacher";
    case process.env.NEXT_PUBLIC_ORIGIN_AUTH:
      return "auth";
    }
  }
  return "student";
};

export const useCurrentUrlType = () => {
  const pathname = usePathname();
  const [urlType, setUrlType] = React.useState<"student" | "teacher" | "auth">("student");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const origin = window.location.origin;
    const currentType = getCurrentUrlType(pathname, origin);
    setUrlType(currentType);
  }, [pathname]);

  return urlType;
};

export default url;