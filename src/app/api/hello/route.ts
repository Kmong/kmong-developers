// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from "next/server";
import { getHello } from "./getHello";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const delay = searchParams.get("delay");

  const delayString = String(delay ?? "1000");
  const delayNumber = Number(delayString);

  console.log("route handler - hello");

  const data = await getHello(delayNumber);

  return NextResponse.json(data);
}
