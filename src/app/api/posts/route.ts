import { NextResponse } from "next/server";
import { getPosts } from "./getPosts";

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}
