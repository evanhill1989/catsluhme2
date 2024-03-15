// hooks/useCatMood.ts

import { useState, useEffect } from "react";
import { calculateCatMood } from "../utils/calculateCatMood";

type InteractionType = "pet" | "feed" | "play" | "hold" | "ignore" | "pss pss";

// Extend CatFactors type if necessary to include methods for updating factors based on interactions
interface CatMoodActions {
  onInteract: (interaction: InteractionType) => void;
}

export function useCatMood(
  initialFactors: CatFactors
): [number, CatMoodActions] {
  const [factors, setFactors] = useState<CatFactors>(initialFactors);
  const [mood, setMood] = useState<number>(0);

  // Recalculate mood whenever factors change
  useEffect(() => {
    const newMood = calculateCatMood(factors);
    setMood(newMood);
  }, [factors]);

  // Define how different interactions affect the mood factors
  const onInteract = (interaction: InteractionType) => {
    // This is a simplified example. You'd have more complex logic based on the interaction type.
    // Adjust factors accordingly.
    let adjustment = 0;
    switch (interaction) {
      case "pet":
        adjustment = 1;
        break;
      case "feed":
        adjustment = 2;
        break;
      case "play":
        adjustment = factors.playful > 0 ? 2 : -1; // Example of interaction based on trait
        break;
      case "hold":
        adjustment = factors.affection > 0 ? 1 : -2; // Cats with lower affection might not like to be held
        break;
      default:
        adjustment = 0;
    }

    // Apply the adjustment. Ensure you're not exceeding the -10 to 10 bounds for each factor.
    setFactors((prevFactors) => ({
      ...prevFactors,
      // This is a simplification. You'd likely want to adjust more than one factor per interaction,
      // and ensure values are capped appropriately.
      affection: Math.max(
        -10,
        Math.min(10, prevFactors.affection + adjustment)
      ),
    }));
  };

  return [mood, { onInteract }];
}
