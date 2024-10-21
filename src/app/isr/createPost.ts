"use server";

import { revalidatePath } from "next/cache";

async function createPost() {
  revalidatePath("/isr", "page");
}

export default createPost;
