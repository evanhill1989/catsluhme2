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
    loveR: number;
  }
) {
  console.log(
    "Inside UpdateRelationship initialFactors, relationshipId, moodChange",
    initialFactors,
    relationshipId,
    moodChange
  );

  // Calculate the distributed change for each field
  let baseChangePerField = moodChange / 3;

  // Function to adjust change per field ensuring it stays within 0-10 range
  function adjustChange(currentValue, change) {
    let adjustedChange = change;
    if (currentValue + change > 10) {
      adjustedChange = 10 - currentValue; // Adjust to not exceed 10
    } else if (currentValue + change < 0) {
      adjustedChange = -currentValue; // Adjust to not fall below 0
    }
    // If currentValue is already at a boundary (0 or 10), prevent any change that would violate the boundary
    if (
      (currentValue === 0 && change < 0) ||
      (currentValue === 10 && change > 0)
    ) {
      adjustedChange = 0;
    }
    return adjustedChange;
  }

  const newTrust =
    initialFactors.trustR +
    adjustChange(initialFactors.trustR, baseChangePerField);
  const newAffection =
    initialFactors.affectionR +
    adjustChange(initialFactors.affectionR, baseChangePerField);
  const newLove = Math.max(
    0,
    Math.min(10, initialFactors.loveR + (newTrust + newAffection) / 2)
  );

  // Directly apply the calculated changes to the database
  // !!!!! OOOOOPSSS don't udpate "love" from relationship with "loving" from cat.
  try {
    const updatedRelationship = await prisma.relationship.update({
      where: { id: relationshipId },
      data: {
        love: newLove,
        trust: newTrust,
        affection: newAffection,
      },
    });

    console.log("Relationship updated successfully", updatedRelationship);
    return revalidatePath(`/cat/${catId}`);
  } catch (error) {
    console.error("Error updating relationship", error);
    throw new Error("Failed to update relationship");
  }
}
