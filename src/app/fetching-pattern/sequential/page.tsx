import Post from "@/app/_src/components/Post";
import { DummyPost } from "@/app/api/dummy/getDummy";
import { HelloData } from "@/app/api/hello/getHello";
import { Suspense } from "react";

async function SequentialPage() {
  const fetchA = await fetch("http://localhost:3000/api/hello?delay=3000");
  const fetchAData: HelloData = await fetchA.json();

  return (
    <div>
      {fetchAData.name}
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentB />
      </Suspense>
    </div>
  );
}

async function ComponentB() {
  const data = await fetch("http://localhost:3000/api/dummy");
  const posts: DummyPost[] = await data.json();

  return (
    <div className="flex flex-col gap-4 p-20">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default SequentialPage;
