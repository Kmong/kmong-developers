import { Post as PostType } from "@/pages/api/posts/type";
import Link from "next/link";

export const revalidate = 60;

export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const posts: PostType[] = await fetch("http://localhost:3000/api/posts").then(
    (res) => res.json()
  );
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetch(`http://localhost:3000/api/posts/${params.id}`).then(
    (res) => res.json()
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-600 mb-4">
        by {post?.author} on{" "}
        {new Date(post?.created_at ?? "").toLocaleDateString()}
      </p>
      <div className="content mb-6">{post?.content}</div>
      <Link href="/isr" className="text-blue-500 hover:underline">
        Back to ISR Page
      </Link>
    </div>
  );
}
