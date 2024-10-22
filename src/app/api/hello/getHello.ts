export type HelloData = {
  name: string;
  delay: number;
};

export async function getHello(delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));

  return { name: "John Doe", delay };
}
