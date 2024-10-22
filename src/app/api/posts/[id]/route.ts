import { NextRequest, NextResponse } from "next/server";
import { getPost } from "./getPost";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const post = await getPost(parseInt(id as string));

  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
}
