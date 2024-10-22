"use client";

import { DummyPost } from "@/app/api/dummy/route";
import { useQuery } from "@tanstack/react-query";
import Post from "../_src/components/Post";

export default function Posts() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const data = await fetch("http://localhost:3000/api/dummy");
      const posts: DummyPost[] = await data.json();
      return posts;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-20">
      {data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
