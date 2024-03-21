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

export async function UpdateRelationship(
  relationshipId: string,
  moodChange: number,
  catId: string,
  initialFactors: {
    loving: number;
    playful: number;
    trustR: number;
    affectionR: number;
  }
) {
  console.log("Inside UpdateRelationship initialFactors,relationshipId, moodChange", initialFactors, relationshipId, moodChange);

  // Calculate the distributed change for each field
  let changePerField = moodChange / 3;
  if (initialFactors.loving + changePerField > 10) {
    changePerField = 10 - initialFactors.loving;
  }
  if (initialFactors.loving + changePerField < -10) {
    changePerField = -10 + initialFactors.loving;
  }
  if (initialFactors.playful + changePerField > 10) {
    changePerField = 10 - initialFactors.playful;
  }
  if (initialFactors.playful + changePerField < -10) {
    changePerField = -10 + initialFactors.playful;
  }
  if (initialFactors.affectionR + changePerField > 10) {
    changePerField = 10 - initialFactors.affectionR;
  }
  if (initialFactors.affectionR + changePerField < -10) {
    changePerField = -10 + initialFactors.affectionR;
  }
  if (initialFactors.trustR + changePerField > 10) {
    changePerField = 10 - initialFactors.trustR;
  }
  if (initialFactors.trustR + changePerField < -10) {
    changePerField = -10 + initialFactors.trustR;
  }

  // Directly apply the calculated changes to the database
  try {
    const updatedRelationship = await prisma.relationship.update({
      where: { id: relationshipId },
      data: {
        love: { increment: changePerField },
        trust: { increment: changePerField },
        affection: { increment: changePerField },
      },
    });

    console.log("Relationship updated successfully", updatedRelationship);
    return revalidatePath(`/cat/${catId}`);
  } catch (error) {
    console.error("Error updating relationship", error);
    throw new Error("Failed to update relationship");
  }
}
