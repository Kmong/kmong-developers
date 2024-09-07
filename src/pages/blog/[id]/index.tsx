import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Post } from "@/pages/api/posts/type";

const fetchPost = async (id: string): Promise<Post> => {
  const response = await fetch(`/api/posts/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: post, error, isLoading } = useQuery<Post>({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id as string),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-600 mb-4">
        by {post?.author} on {new Date(post?.created_at ?? '').toLocaleDateString()}
      </p>
      <div className="content mb-6">{post?.content}</div>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Blog List
      </Link>
    </div>
  );
};

export default PostDetail;