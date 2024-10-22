import express, { Request, Response } from "express";
import { getDummy } from "../../src/app/api/dummy/getDummy";
import { getHello } from "../../src/app/api/hello/getHello";
import { getPosts } from "../../src/app/api/posts/getPosts";
import { getPost } from "../../src/app/api/posts/[id]/getPost";

const app = express();
const port = 3000;

// 기본 라우트
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/api/dummy", async (req: Request, res: Response) => {
  const dummy = await getDummy();
  res.json(dummy);
});

app.get("/api/hello", async (req: Request, res: Response) => {
  const delay = req.query.delay;

  const delayString = String(delay ?? "1000");
  const delayNumber = Number(delayString);

  const data = await getHello(delayNumber);

  res.json(data);
});

app.get("/api/posts", async (req: Request, res: Response) => {
  const posts = await getPosts();

  res.json(posts);
});

app.get("/api/posts/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const post = await getPost(Number(id));

  res.json(post);
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
