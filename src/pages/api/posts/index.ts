import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from './type';

const posts: Post[] = [
    {
      id: 1,
      title: "First Post",
      content: "This is the first post",
      author: "John Doe",
      created_at: "2023-08-30",
      updated_at: "2023-08-30",
      image_url: "https://via.placeholder.com/600x400", // 이미지 URL
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the second post",
      author: "Jane Doe",
      created_at: "2023-08-31",
      updated_at: "2023-08-31",
      image_url: "https://via.placeholder.com/600x400", // 이미지 URL
    },
  ];
  
export default function handler(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  res.status(200).json(posts);
}