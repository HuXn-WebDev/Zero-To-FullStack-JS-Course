import { NextResponse } from "next/server";

export function GET(_, response) {
  console.log(response.params.id);
  const { id } = response.params;
  return NextResponse.json(id, { status: 200 });
}
