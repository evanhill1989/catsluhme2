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

import prisma from './lib/db';

export async function updateUserAction(userId: string, catId: string, action: UserAction) {
  // Step 1: Retrieve the current relationship and cat mood
  const relationship = await prisma.relationship.findFirst({
    where: {
      userId: userId,
      catId: catId,
    },
  });
  const cat = await prisma.cat.findUnique({
    where: {
      id: catId,
    },
  });

  if (!relationship || !cat) {
    throw new Error('Relationship or cat not found');
  }

  // Step 2: Modify the mood and relationship based on the action
  let newMood = cat.mood; // Assume 'mood' is a property of the cat
  let newLove = relationship.love;
  let newTrust = relationship.trust;

  switch (action) {
    case UserAction.Pet:
      newMood += 1; // Simple example, adjust as needed
      newLove += 1;
      break;
    case UserAction.Feed:
      newMood += 2;
      newTrust += 1;
      break;
    case UserAction.Play:
      newMood += 3;
      newLove += 2;
      newTrust += 2;
      break;
    // Add more cases as needed
  }

  // Ensure mood and relationship parameters are within their bounds
  newMood = Math.max(0, Math.min(newMood, 10)); // Assuming mood is 0-10

  // Step 3: Persist the updates
  await prisma.cat.update({
    where: { id: catId },
    data: { mood: newMood },
  });

  await prisma.relationship.update({
    where: { id: relationship.id },
    data: {
      love: newLove,
      trust: newTrust,
    },
  });

  // Optionally, revalidate the affected page if using ISR
  // await revalidatePath(`/cat/${catId}`);
}
