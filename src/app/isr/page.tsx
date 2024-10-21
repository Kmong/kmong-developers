import { Post } from "@/pages/api/posts/type";
import Link from "next/link";
import RevalidateButton from "./RevalidateButton";

export const revalidate = 300;

async function IsrPage() {
  const posts: Post[] = await fetch("http://localhost:3000/api/posts").then(
    (res) => res.json()
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">ISR Page</h1>
      <RevalidateButton />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts?.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">by {post.author}</p>
            <Link
              href={`/isr/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IsrPage;
