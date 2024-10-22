import { NextRequest, NextResponse } from "next/server";
import { Post } from "../type";

const posts: Post[] = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post",
    author: "John Doe",
    created_at: "2023-08-30",
    image_url: "tes",
    updated_at: "2023-08-30",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post",
    author: "Jane Doe",
    created_at: "2023-08-31",
    image_url: "test",
    updated_at: "2023-08-31",
  },
];

export function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const post = posts.find((p) => p.id === parseInt(id as string));

  if (post) {
    return NextResponse.json(post);
  } else {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
}
