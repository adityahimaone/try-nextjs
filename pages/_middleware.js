import { NextResponse } from "next/server";

export default function middleware(req) {
  const nextRes = NextResponse;
  const { token } = req.cookies;
  // const res = NextResponse.next(); // get info res from NextResponse

  const pathUrl = req.url;

  if (token && pathUrl === "http://localhost:3000/login") {
    return nextRes.redirect("/dashboard");
  }
  return null;
}
