import type { NextApiRequest, NextApiResponse } from 'next';

const posts: DummyPost[] = [
  { id: 1, title: 'Post 1', content: 'This is the first post' },
  { id: 2, title: 'Post 2', content: 'This is the second post' },
  { id: 3, title: 'Post 3', content: 'This is the third post' },
];

export interface DummyPost {
  id: number;
  title: string;
  content: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<DummyPost[]>) {
  res.status(200).json(posts);
}