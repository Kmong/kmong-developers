import { Post } from "../type";

const posts: Post[] = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post",
    author: "John Doe",
    created_at: "2023-08-30",
    image_url: "tes",
    updated_at: "2023-08-30",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post",
    author: "Jane Doe",
    created_at: "2023-08-31",
    image_url: "test",
    updated_at: "2023-08-31",
  },
];

export async function getPost(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return posts.find((p) => p.id === id);
}
