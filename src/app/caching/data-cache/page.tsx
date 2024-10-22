import Post from "@/app/_src/components/Post";
import { DummyPost } from "@/app/api/dummy/getDummy";
import { HelloData } from "@/app/api/hello/getHello";

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-4 p-20">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Hello />
    </div>
  );
}

async function Hello() {
  const hello = await getHello();
  console.log("Hello");

  return (
    <div>
      {hello.name}
    </div>
  );
}

const getPosts = async () => {
  const data = await fetch("http://localhost:3000/api/dummy", {
    next: {
      revalidate: 10,
    },
  });
  const posts: DummyPost[] = await data.json();

  return posts;
};

const getHello = async () => {
  const data = await fetch("http://localhost:3000/api/hello?delay=3000", {
    next: {
      tags: ["hello"],
    },
  });
  const hello: HelloData = await data.json();

  console.log("getHello");

  return hello;
};
