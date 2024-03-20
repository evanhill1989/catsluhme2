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
  trustR: number;
  affectionR: number;
};

type initialFactors = {
  loving: number;
  playful: number;
  trustR: number;
  affectionR: number;
};

// Assuming you add a new parameter for interaction frequencies
export function useCatMood(
  moodFactors: CatFactors,
  initialFactors: initialFactors,
  interactionFrequencies: Record<InteractionType, number>
): [number, CatMoodActions] {
  const [factors, setFactors] = useState<CatFactors>(moodFactors);
  const [mood, setMood] = useState<number>(0);

  function getPlayAdjustmentFactor() {
    if (initialFactors.playful < 2) return -1;
    if (initialFactors.playful < 4) return 0;
    if (initialFactors.playful < 7) return 0.5;
    if (initialFactors.playful >= 7) return 1;
  }

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
  }

  useEffect(() => {
    const newMood = calculateCatMood(factors);
    setMood(newMood);
  }, [factors]);

  // Above this is where we watch for a change in factors dependency
  // and update the mood.
  // ***** VITAL LOGIC HERE at Heart of mood changes *****
  // Below this is where we update the factors based on the user interaction

  const onInteract = (interaction: InteractionType) => {
    // Now consider interactionFrequencies to adjust the impact
    // Example: Fetch the current frequency for this interaction
    const frequency = interactionFrequencies[interaction] || 0;
    const adjustmentFactor = getBaseAdjustmentFactor(frequency, interaction); // Implement this based on your diminishing returns logic
    const playAdjustmentFactor = getPlayAdjustmentFactor(frequency);
    // Adjust mood factors using adjustmentFactor
    // Example: For a 'pet' interaction with diminishing returns

    switch (interaction) {
      case "pet":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(0, Math.min(10, prev.loving + 1 * adjustmentFactor)),
          playful: Math.max(
            0,
            Math.min(10, prev.playful + 1 * adjustmentFactor)
          ),
          trustR: Math.max(0, Math.min(10, prev.trustR + 1 * adjustmentFactor)),
          affectionR: Math.max(
            0,
            Math.min(10, prev.affectionR + 1 * adjustmentFactor)
          ),
        }));
        // console.log("Loving: ", factors.loving);
        // console.log("trustR: ", factors.trustR);
        // console.log("AffectionR: ", factors.affectionR);
        // console.log("Playful: ", factors.playful);
        break;
      case "feed":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(0, Math.min(10, prev.loving + 1 * adjustmentFactor)),

          trustR: Math.max(0, Math.min(10, prev.trustR + 1 * adjustmentFactor)),
          affectionR: Math.max(
            0,
            Math.min(10, prev.affectionR + 1 * adjustmentFactor)
          ),
        }));
        // console.log("Loving: ", factors.loving);
        // console.log("trustR: ", factors.trustR);
        // console.log("AffectionR: ", factors.affectionR);
        // console.log("Playful: ", factors.playful);
        break;
      case "play":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(0, Math.min(10, prev.loving + playAdjustmentFactor)),
          playful: Math.max(
            0,
            Math.min(10, prev.playful + playAdjustmentFactor)
          ),
          trustR: Math.max(0, Math.min(10, prev.trustR + playAdjustmentFactor)),
        }));
        console.log("Loving: ", factors.loving);
        console.log("trustR: ", factors.trustR);
        console.log("AffectionR: ", factors.affectionR);
        console.log("Playful: ", factors.playful);
        break;
      case "hold":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(0, Math.min(10, prev.loving + 1 * adjustmentFactor)),
          playful: Math.max(
            0,
            Math.min(10, prev.playful + 1 * adjustmentFactor)
          ),
          trustR: Math.max(0, Math.min(10, prev.trustR + 1 * adjustmentFactor)),
          affectionR: Math.max(
            0,
            Math.min(10, prev.affectionR + 1 * adjustmentFactor)
          ),
        }));
        // console.log("Loving: ", factors.loving);
        // console.log("trustR: ", factors.trustR);
        // console.log("AffectionR: ", factors.affectionR);
        // console.log("Playful: ", factors.playful);
        break;
      case "ignore":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(0, Math.min(10, prev.loving + 1 * adjustmentFactor)),
          trustR: Math.max(0, Math.min(10, prev.trustR + 1 * adjustmentFactor)),
          affectionR: Math.max(
            0,
            Math.min(10, prev.affectionR + 1 * adjustmentFactor)
          ),
        }));
        // console.log("Loving: ", factors.loving);
        // console.log("trustR: ", factors.trustR);
        // console.log("AffectionR: ", factors.affectionR);
        // console.log("Playful: ", factors.playful);
        break;
      case "pss pss":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(0, Math.min(10, prev.loving + 1 * adjustmentFactor)),
          playful: Math.max(
            0,
            Math.min(10, prev.playful + 1 * adjustmentFactor)
          ),
          trustR: Math.max(0, Math.min(10, prev.trustR + 1 * adjustmentFactor)),
          affectionR: Math.max(
            0,
            Math.min(10, prev.affectionR + 1 * adjustmentFactor)
          ),
        }));
        // console.log("Loving: ", factors.loving);
        // console.log("trustR: ", factors.trustR);
        // console.log("AffectionR: ", factors.affectionR);
        // console.log("Playful: ", factors.playful);

        break;
      default:
        break;
    }
  };

  return [mood, { onInteract }];
}
