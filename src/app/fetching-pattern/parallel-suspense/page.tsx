import Post from "@/app/_src/components/Post";
import { DummyPost } from "@/app/api/dummy/getDummy";
import { Post as PostType } from "@/app/api/posts/type";
import React, { Suspense } from "react";

function ParallelSuspensePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading A ...</div>}>
        <ComponentA />
      </Suspense>
      <Suspense fallback={<div>Loading B ...</div>}>
        <ComponentB />
      </Suspense>
    </div>
  );
}

async function ComponentA() {
  const data = await fetch("http://localhost:3000/api/dummy");
  const posts: PostType[] = await data.json();

  return (
    <div className="flex flex-col gap-4 p-20">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

async function ComponentB() {
  const data = await fetch("http://localhost:3000/api/posts");
  const posts: DummyPost[] = await data.json();

  return (
    <div className="flex flex-col gap-4 p-20">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ParallelSuspensePage;
