import { NextResponse } from "next/server";

export function middleware(request) {
  //   if (request.nextUrl.pathname != "/login") {
  //     return NextResponse.redirect(new URL("/login", request.url));
  // }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/about/:path*", "/studentlist/:path*"],
};
