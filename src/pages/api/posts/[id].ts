import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from './type';

const posts: Post[] = [
  { id: 1, title: "First Post", content: "This is the first post", author: "John Doe", created_at: "2023-08-30", updated_at: "2023-08-30" },
  { id: 2, title: "Second Post", content: "This is the second post", author: "Jane Doe", created_at: "2023-08-31", updated_at: "2023-08-31" }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Post | { message: string }>) {
  const { id } = req.query;
  const post = posts.find(p => p.id === parseInt(id as string));

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}