import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const middleware = (request: NextRequest) => {
  const url = request.nextUrl;
  const origin = request.nextUrl.origin;
  const pathname = request.nextUrl.pathname;
  console.log("Middleware origin:", origin);

  const origin_res = NextResponse.next();
  origin_res.headers.set("x-origin", origin.toString());
  origin_res.headers.set("x-pathname", pathname.toString());

  if (
    !origin ||
    !process.env.NEXT_PUBLIC_ORIGIN_TEACHER ||
    !process.env.NEXT_PUBLIC_ORIGIN_AUTH ||
    !process.env.NEXT_PUBLIC_ORIGIN_STUDENT
  ) {
    return origin_res;
  }

  if (origin === process.env.NEXT_PUBLIC_ORIGIN_TEACHER) {
    url.pathname = `/teacher${url.pathname}`;
    const res = NextResponse.rewrite(url);
    res.headers.set("x-origin", origin.toString());
    res.headers.set("x-pathname", pathname.toString());
    return res;
  }
  if (origin === process.env.NEXT_PUBLIC_ORIGIN_AUTH) {
    url.pathname = `/auth${url.pathname}`;
    const res = NextResponse.rewrite(url);
    res.headers.set("x-origin", origin.toString());
    res.headers.set("x-pathname", pathname.toString());
    return res;
  }
  if (origin === process.env.NEXT_PUBLIC_ORIGIN_STUDENT) {
    url.pathname = `/student${url.pathname}`;
    const res = NextResponse.rewrite(url);
    res.headers.set("x-origin", origin.toString());
    res.headers.set("x-pathname", pathname.toString());
    return res;
  }

  return origin_res;
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};


export default middleware;