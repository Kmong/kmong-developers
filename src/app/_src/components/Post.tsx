import { DummyPost } from "@/pages/api/dummy";
import React from "react";

interface PostProps {
  post: DummyPost;
}

function Post({ post }: PostProps) {
  return (
    <div className="border border-gray-100 p-4 hover:border-gray-400">
      <h4 className="m-0 text-gray-100 font-bold text-lg">{post.title}</h4>
      <p className="m-0 text-gray-200 text-sm">{post.content}</p>
    </div>
  );
}

export default Post;
