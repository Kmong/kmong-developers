import { DummyPost } from "@/pages/api/dummy"

export default async function Page() {
  const data = await fetch('http://localhost:3000/api/dummy')
  const posts: DummyPost[] = await data.json()

  return (
    <div className="flex flex-col gap-4 p-20">
      {posts.map((post) => (
        <div className="border border-gray-100 p-4 hover:border-gray-400" key={post.id}>
          <h4 className="m-0 text-gray-100 font-bold text-lg">
            {post.title}
          </h4>
          <p className="m-0 text-gray-200 text-sm">
            {post.content}
          </p>
        </div>
      ))}
    </div>
  )
}