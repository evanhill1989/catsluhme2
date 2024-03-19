// hooks/useCatMood.ts

"use client";

import { useState, useEffect } from "react";
import { calculateCatMood } from "../utils/calculateCatMood";

type InteractionType = "pet" | "feed" | "play" | "hold" | "ignore" | "pss pss";

// Extend CatFactors type if necessary to include methods for updating factors based on interactions
interface CatMoodActions {
  onInteract: (interaction: InteractionType) => void;
}

type CatFactors = {
  loving: number;
  playful: number;
  trust: number;
  affection: number;
};

// Assuming you add a new parameter for interaction frequencies
export function useCatMood(
  moodFactors: CatFactors,
  interactionFrequencies: Record<InteractionType, number>
): [number, CatMoodActions] {
  const [factors, setFactors] = useState<CatFactors>(moodFactors);
  const [mood, setMood] = useState<number>(0);

  function getAdjustmentFactor(frequency) {
    // Example logic for diminishing returns
    if (frequency <= 3) return 1; // Full effect
    if (frequency <= 6) return 0.75; // Reduced effect
    if (frequency <= 9) return 0.5; // Even more reduced
    return -0.25; // Minimal effect after 9 interactions
  }

  useEffect(() => {
    const newMood = calculateCatMood(factors);
    setMood(newMood);
  }, [factors]);

  const onInteract = (interaction: InteractionType) => {
    // Now consider interactionFrequencies to adjust the impact
    // Example: Fetch the current frequency for this interaction
    const frequency = interactionFrequencies[interaction] || 0;
    const adjustmentFactor = getAdjustmentFactor(frequency); // Implement this based on your diminishing returns logic

    // Adjust mood factors using adjustmentFactor
    // Example: For a 'pet' interaction with diminishing returns
    if (interaction === "pet") {
      setFactors((prev) => ({
        ...prev,
        affection: Math.max(
          -10,
          Math.min(10, prev.affection + 1 * adjustmentFactor)
        ),
        loving: Math.max(-10, Math.min(10, prev.loving + 1 * adjustmentFactor)),
      }));
      console.log("Affection: ", factors.affection);
      console.log("Loving: ", factors.loving);
    }
    // Handle other interactions similarly
  };

  return [mood, { onInteract }];
}
