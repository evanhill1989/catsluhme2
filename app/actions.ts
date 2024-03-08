// create new relationship between user and cat

"use server";

import { redirect } from "next/navigation";
import prisma from "./lib/db";
import { supabase } from "./lib/supabase";
import { revalidatePath } from "next/cache";

export async function CreateRelationship(formData: FormData) {
  const userId = formData.get("userId") as string;
  const catId = formData.get("catId") as string;

  const data = await prisma.relationship.create({
    data: {
      userId: userId,

      catId: catId,
    },
  });

  // don't think i need -- return redirect("/") -- maybe i do
  return revalidatePath(`/cat/${catId}`);
}
