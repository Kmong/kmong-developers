// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type HelloData = {
  name: string;
  delay: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloData>
) {
  const { query } = req;
  const { delay } = query;

  const delayString = String(delay ?? "1000");
  const delayNumber = Number(delayString);

  await new Promise((resolve) => setTimeout(resolve, delayNumber));
  res.status(200).json({ name: "John Doe", delay: delayNumber });
}
