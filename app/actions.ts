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
      duration: 0,
      love: 0,
      trust: 0,
      catId: catId,
    },
  });

  // don't think i need -- return redirect("/") -- maybe i do
  return revalidatePath(`/cat/${catId}`);
}

export async function UpdateRelationship(update: UpdatedData) {
  const love = update.love as number;
  const trust = update.trust as number;
  const affection = update.affection as number;

  const data = await prisma.relationship.update({
    where: {
      id: update.id,
    },
    data: {
      love: love,
      trust: trust,
      affection: affection,
    },
  });

  return revalidatePath(`/cat/${data.catId}`);
}
