"use server";

import { revalidatePath } from "next/cache";

async function revalidateISRPage() {
  revalidatePath("/isr", "page");
}

export default revalidateISRPage;
