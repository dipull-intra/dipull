import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const middleware = (request: NextRequest) => {
  const url = request.nextUrl;
  const origin = request.nextUrl.origin;
  console.log("Middleware origin:", origin);

  if (
    !origin ||
    !process.env.NEXT_PUBLIC_ORIGIN_TEACHER ||
    !process.env.NEXT_PUBLIC_ORIGIN_AUTH ||
    !process.env.NEXT_PUBLIC_ORIGIN_STUDENT
  ) {
    return NextResponse.next();
  }

  if (origin === process.env.NEXT_PUBLIC_ORIGIN_TEACHER) {
    url.pathname = `/teacher${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  if (origin === process.env.NEXT_PUBLIC_ORIGIN_AUTH) {
    url.pathname = `/auth${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  if (origin === process.env.NEXT_PUBLIC_ORIGIN_STUDENT) {
    url.pathname = `/student${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};


export default middleware;