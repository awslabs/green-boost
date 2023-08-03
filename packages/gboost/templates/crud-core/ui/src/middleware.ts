// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { generateCsp } from "./utils/generate-csp";

export default function middleware(request: NextRequest) {
  // clone request headers to add to response
  const requestHeaders = new Headers(request.headers);
  // generate nonce
  const nonce = crypto.randomUUID();
  // set nonce so we can access in app/layout.tsx to use in styles
  requestHeaders.set("x-nonce", nonce);
  const csp = generateCsp({ nonce });
  // Set the CSP header so that Next.js can read it and generate tags with the nonce
  requestHeaders.set("content-security-policy", csp);
  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  // Also set the CSP header in the response so that it is outputted to the browser
  response.headers.set("content-security-policy", generateCsp({ nonce }));
  return response;
}

export const config = {
  /**
   * Match all request paths except for the ones starting with:
   * - _next/static
   * - _next/image
   * - favicon.ico
   */
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
