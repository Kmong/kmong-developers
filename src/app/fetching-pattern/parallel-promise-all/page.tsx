import Post from "@/app/_src/components/Post";
import { DummyPost } from "@/pages/api/dummy";
import { Post as PostType } from "@/pages/api/posts/type";
import React from "react";

async function ParallelPromiseAllPage() {
  const [posts, dummyPosts] = await Promise.all([getPosts(), getDummyPosts()]);

  return (
    <div className="flex flex-col gap-4 p-20">
      <p>Posts</p>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <p>Dummy Posts</p>
      {dummyPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function getPosts(): Promise<PostType[]> {
  return fetch("http://localhost:3000/api/posts")
    .then((res) => res.json())
    .then((data) => data);
}

function getDummyPosts(): Promise<DummyPost[]> {
  return fetch("http://localhost:3000/api/dummy")
    .then((res) => res.json())
    .then((data) => data);
}

export default ParallelPromiseAllPage;
