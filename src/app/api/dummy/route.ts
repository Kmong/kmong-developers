import { NextResponse } from "next/server";
import { getDummy } from "./getDummy";

export async function GET() {
  const dummy = await getDummy();

  return NextResponse.json(dummy);
}
