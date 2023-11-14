import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ name: "HuXn", age: 20, location: "idk" });
}
