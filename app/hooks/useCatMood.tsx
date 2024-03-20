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

  function getBaseAdjustmentFactor(frequency, interaction) {
    // Example logic for diminishing returns
    switch (interaction) {
      case "pet":
        if (frequency <= 3) return 1; // Full effect
        if (frequency <= 6) return 0.75; // Reduced effect
        if (frequency <= 9) return 0.5; // Even more reduced
        return -0.25; // Negative effect after 9 interactions
      case "feed":
        if (frequency <= 3) return 1; // Full effect
        if (frequency <= 6) return 0.75; // Reduced effect
        if (frequency <= 9) return 0.5; // Even more reduced
        return -0.25; // Negative effect after 9 interactions
      case "play":
        if (frequency <= 3) return 1; // Full effect
        if (frequency <= 6) return 0.75; // Reduced effect
        if (frequency <= 9) return 0.5; // Even more reduced
        return -0.25; // Negative effect after 9 interactions
      case "hold":
        if (frequency <= 3) return 1; // Full effect
        if (frequency <= 6) return 0.75; // Reduced effect
        if (frequency <= 9) return 0.5; // Even more reduced
        return -0.25; // Negative effect after 9 interactions
      case "ignore":
        if (frequency <= 3) return 1; // Full effect
        if (frequency <= 6) return 0.75; // Reduced effect
        if (frequency <= 9) return 0.5; // Even more reduced
        return -0.25; // Negative effect after 9 interactions
      case "pss pss":
        if (frequency <= 3) return 0.5; // Full effect
        if (frequency <= 6) return 0.25; // Reduced effect
        // Even more reduced
        return 0; // Nullish effect after 9 interactions
    }

    return 1;
  }

  useEffect(() => {
    const newMood = calculateCatMood(factors);
    setMood(newMood);
  }, [factors]);

  const onInteract = (interaction: InteractionType) => {
    // Now consider interactionFrequencies to adjust the impact
    // Example: Fetch the current frequency for this interaction
    const frequency = interactionFrequencies[interaction] || 0;
    const adjustmentFactor = getBaseAdjustmentFactor(frequency, interaction); // Implement this based on your diminishing returns logic
    // Adjust mood factors using adjustmentFactor
    // Example: For a 'pet' interaction with diminishing returns

    switch (interaction) {
      case "pet":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(
            -10,
            Math.min(10, prev.loving + 1 * adjustmentFactor)
          ),
          playful: Math.max(
            -10,
            Math.min(10, prev.playful + 1 * adjustmentFactor)
          ),
          trust: Math.max(-10, Math.min(10, prev.trust + 1 * adjustmentFactor)),
          affection: Math.max(
            -10,
            Math.min(10, prev.affection + 1 * adjustmentFactor)
          ),
        }));
        console.log("Loving: ", factors.loving);
        console.log("Trust: ", factors.trust);
        break;
      case "feed":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(
            -10,
            Math.min(10, prev.loving + 1 * adjustmentFactor)
          ),

          trust: Math.max(-10, Math.min(10, prev.trust + 1 * adjustmentFactor)),
          affection: Math.max(
            -10,
            Math.min(10, prev.affection + 1 * adjustmentFactor)
          ),
        }));
        console.log("Trust: ", factors.trust);
        console.log("Affection: ", factors.affection);
        break;
      case "play":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(
            -10,
            Math.min(10, prev.loving + 1 * adjustmentFactor)
          ),
          playful: Math.max(
            -10,
            Math.min(10, prev.playful + 1 * adjustmentFactor)
          ),
          trust: Math.max(-10, Math.min(10, prev.trust + 1 * adjustmentFactor)),
        }));
        console.log("Affection: ", factors.affection);
        console.log("Trust: ", factors.trust);
        break;
      case "hold":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(
            -10,
            Math.min(10, prev.loving + 1 * adjustmentFactor)
          ),
          playful: Math.max(
            -10,
            Math.min(10, prev.playful + 1 * adjustmentFactor)
          ),
          trust: Math.max(-10, Math.min(10, prev.trust + 1 * adjustmentFactor)),
          affection: Math.max(
            -10,
            Math.min(10, prev.affection + 1 * adjustmentFactor)
          ),
        }));
        console.log("Trust: ", factors.trust);
        break;
      case "ignore":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(
            -10,
            Math.min(10, prev.loving + 1 * adjustmentFactor)
          ),
          trust: Math.max(-10, Math.min(10, prev.trust + 1 * adjustmentFactor)),
          affection: Math.max(
            -10,
            Math.min(10, prev.affection + 1 * adjustmentFactor)
          ),
        }));
        console.log("Loving: ", factors.loving);
        break;
      case "pss pss":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(
            -10,
            Math.min(10, prev.loving + 1 * adjustmentFactor)
          ),
          playful: Math.max(
            -10,
            Math.min(10, prev.playful + 1 * adjustmentFactor)
          ),
          trust: Math.max(-10, Math.min(10, prev.trust + 1 * adjustmentFactor)),
          affection: Math.max(
            -10,
            Math.min(10, prev.affection + 1 * adjustmentFactor)
          ),
        }));
        console.log("Loving: ", factors.loving);
        console.log("Trust: ", factors.trust);
        break;
      default:
        break;
    }
  };

  return [mood, { onInteract }];
}
