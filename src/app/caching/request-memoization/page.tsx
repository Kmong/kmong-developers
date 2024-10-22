import Post from "@/app/_src/components/Post";
import { DummyPost } from "@/app/api/dummy/getDummy";
import { HelloData } from "@/app/api/hello/getHello";

export const dynamic = "force-dynamic";

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
      <Hello2 />
    </div>
  );
}

async function Hello2() {
  const hello = await getHello();
  console.log("Hello2");

  return (
    <div>
      {hello.name}
      <Hello3 />
    </div>
  );
}

async function Hello3() {
  const hello = await getHello();
  console.log("Hello3");

  return <div>{hello.name}</div>;
}

const getPosts = async () => {
  const data = await fetch("http://localhost:3000/api/dummy");
  const posts: DummyPost[] = await data.json();

  return posts;
};

const getHello = async () => {
  const data = await fetch("http://localhost:3000/api/hello?delay=3000");
  const hello: HelloData = await data.json();

  console.log("getHello");

  return hello;
};
