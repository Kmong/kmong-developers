import Post from "../_src/components/Post";
import { DummyPost } from "../api/dummy/getDummy";

export default async function Page() {
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
