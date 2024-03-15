// hooks/useCatMood.ts

import { useState, useEffect } from "react";
import { calculateCatMood } from "../utils/calculateCatMood";

type InteractionType = "pet" | "feed" | "play" | "hold" | "ignore" | "pss pss";

// Extend CatFactors type if necessary to include methods for updating factors based on interactions
interface CatMoodActions {
  onInteract: (interaction: InteractionType) => void;
}

export function useCatMood(moodFactors: CatFactors): [number, CatMoodActions] {
  const [factors, setFactors] = useState<CatFactors>(moodFactors);
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
    let lovingAdjustment = 0,
      playfulAdjustment = 0,
      trustAdjustment = 0,
      affectionAdjustment = 0;
    switch (interaction) {
      case "pet":
        affectionAdjustment = 1;
        lovingAdjustment = 1;
        break;
      case "feed":
        trustAdjustment = 2;
        playfulAdjustment = 1;
        break;
      case "play":
        playfulAdjustment = factors.playful > 0 ? 3 : -1;
        affectionAdjustment = 2;
        break;
      case "hold":
        affectionAdjustment = factors.affection > 0 ? 2 : -2;
        trustAdjustment = 1;
        break;
      case "ignore":
        trustAdjustment = -1;
        break;
      case "pss pss":
        lovingAdjustment = 2;
        break;
      default:
        // No default adjustment needed
        break;
    }

    // Apply the adjustment. Ensure you're not exceeding the -10 to 10 bounds for each factor.
    setFactors((prevFactors) => ({
      loving: Math.max(
        -10,
        Math.min(10, prevFactors.loving + lovingAdjustment)
      ),
      playful: Math.max(
        -10,
        Math.min(10, prevFactors.playful + playfulAdjustment)
      ),
      trust: Math.max(-10, Math.min(10, prevFactors.trust + trustAdjustment)),
      affection: Math.max(
        -10,
        Math.min(10, prevFactors.affection + affectionAdjustment)
      ),
    }));
  };

  return [mood, { onInteract }];
}
