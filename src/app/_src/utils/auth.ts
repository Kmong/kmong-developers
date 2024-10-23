import { cookies } from "next/headers";

const auth = async () => {
  const data = await fetch("http://localhost:3000/api/auth", {
    headers: {
      Cookie: cookies().toString(),
    },
  });

  return data;
};

export default auth;
