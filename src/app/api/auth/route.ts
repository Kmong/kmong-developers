import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "./getAuth";

export async function GET(request: NextRequest) {
  if (!request.cookies) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 401 }
    );
  }
  const auth = await getAuth();

  return NextResponse.json(auth);
}
