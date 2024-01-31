import { NextResponse } from "next/server";

export async function POST(req, res) {
  let payload = await req.json();
  console.log(payload.name);

  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "required filed not found" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      result: "Credientials Verified, User Successfully Created.",
    },
    { status: 201 }
  );
}
