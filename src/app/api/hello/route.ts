// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from "next/server";

export type HelloData = {
  name: string;
  delay: number;
};

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const delay = searchParams.get("delay");

  const delayString = String(delay ?? "1000");
  const delayNumber = Number(delayString);

  await new Promise((resolve) => setTimeout(resolve, delayNumber));
  return NextResponse.json({ name: "John Doe", delay: delayNumber });
}
