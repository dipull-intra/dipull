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

export default url;