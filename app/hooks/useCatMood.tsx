// hooks/useCatMood.ts

"use client";

import { useState, useEffect } from "react";
import { calculateCatMood } from "../utils/calculateCatMood";
import {
  playAdjustments,
  feedAdjustments,
  holdAdjustments,
  petAdjustments,
  ignoreAdjustments,
  pssPssAdjustments,
} from "../lib/actionAdjustments";

type InteractionType = "pet" | "feed" | "play" | "hold" | "ignore" | "pss pss";

// Extend CatFactors type if necessary to include methods for updating factors based on interactions
interface CatMoodActions {
  onInteract: (interaction: InteractionType) => void;
}

interface adjustmentFactors {
  interaction: InteractionType;
  initialFactors: {
    playful: number;
    extrovert: boolean;
    loveR: number;
    loving: number;
  };
  frequency: number;
  firstAction: string;
}

interface interactionOrderAdjustmentFactors {
  initialFactors: {
    playful: number;
    extrovert: boolean;
    loveR: number;
    loving: number;
  };

  firstAction: string;
  interaction: InteractionType;
}
type CatFactors = {
  loving: number;
  playful: number;
  trustR: number;
  affectionR: number;
};

type baseFactors = {
  loving: number;
  playful: number;
  extrovert: boolean;
  trustR: number;
  affectionR: number;
  loveR: number;
};

// Assuming you add a new parameter for interaction frequencies
export function useCatMood(
  moodFactors: CatFactors,
  initialFactors: baseFactors,
  actionHistory: InteractionType[],
  catName: string
): [number, CatMoodActions] {
  const [factors, setFactors] = useState<CatFactors>(moodFactors);
  const [mood, setMood] = useState<number>(0);
  const [actionLog, setActionLog] = useState<InteractionType[]>([]);

  // wait what? factors only include catFactors?
  useEffect(() => {
    console.log("@@@@Am I running the useEffect reliant on factors here?");
    const newMood = calculateCatMood(factors);
    setMood(newMood);
  }, [factors]);

  // using Map because we want to track initial action, and Map may be easier to work with for other things
  const actionFrequencies = new Map();

  actionLog.forEach((action) => {
    if (actionFrequencies.has(action)) {
      actionFrequencies.set(action, actionFrequencies.get(action) + 1);
    } else {
      actionFrequencies.set(action, 1);
    }
  });

  // To access the first action and its frequency:
  const firstActionEntry = actionFrequencies.entries().next().value;
  const firstAction = firstActionEntry ? firstActionEntry[0] : null;

  // To iterate over actions in order with their frequencies:
  actionFrequencies.forEach((count, action) => {});

  const actionKeys: Record<string, string> = {
    pet: "pet",
    feed: "feed",
    play: "play",
    hold: "hold",
    ignore: "ignore",
    "pss pss": "pss_pss",
  };

  function interactionOrderAdjustment({
    interaction,
    initialFactors,
    firstAction,
  }: interactionOrderAdjustmentFactors) {
    // Placeholder values for now
    switch (interaction) {
      case "pet":
        console.log(
          "  initialFactors.playful",
          initialFactors.playful,
          " firstAction",
          firstAction
        );
        return 0;
      case "feed":
        return 1;
      case "play":
        return 2;
      case "hold":
        return 3;
      case "ignore":
        return 4;
      case "pss pss":
        return 5;
    }
  }

  function getAdjustment({
    interaction,
    initialFactors,
    frequency,
    firstAction,
  }: adjustmentFactors): number {
    function getKey(factor: number) {
      if (factor <= 3) return "low";
      if (factor <= 6) return "medium";
      return "max";
    }

    const firstActionKey = actionKeys[firstAction] || "unknown_action";
    const extrovertKey = initialFactors.extrovert ? "true" : "false";
    const frequencyKey = getKey(frequency);
    const relationshipLoveKey = getKey(initialFactors.loveR);
    const playfulnessKey = initialFactors.playful <= 3 ? "low" : "high";
    const lovingKey = initialFactors.loving <= 3 ? "low" : "high";

    const key = `${playfulnessKey}_${lovingKey}_${extrovertKey}_${relationshipLoveKey}_${frequencyKey}`;

    console.log("actionLog", actionLog);
    console.log("actionFrequencies", actionFrequencies);
    console.log("firstAction ", firstAction);
    console.log("key", key);

    // below we pass the matching key decision table for the current interaction case
    switch (interaction) {
      case "pet":
        return petAdjustments[key] || 0;
      case "feed":
        return feedAdjustments[key] || 0;
      case "play":
        return playAdjustments[key] || 0;
      case "hold":
        return holdAdjustments[key] || 0;
      case "ignore":
        return ignoreAdjustments[key] || 0;
      case "pss pss":
        return pssPssAdjustments[key] || 0;
    }
  }

  // ***** VITAL LOGIC HERE at Heart of mood changes *****

  // Below this is where we update the factors based on the user interaction

  const onInteract = (interaction: InteractionType) => {
    setActionLog((prevActionLog) => {
      const updatedActionLog = [...prevActionLog, interaction];
      return updatedActionLog;
    });

    const trueFirstAction = firstAction ? firstAction : interaction;

    const frequency = (actionFrequencies.get(interaction) || 0) + 1;

    // Calculate the adjustment factor
    const adjustmentFactor = getAdjustment({
      interaction: interaction,
      initialFactors: {
        playful: initialFactors.playful,
        extrovert: initialFactors.extrovert,
        loving: initialFactors.loving,
        loveR: initialFactors.loveR,
      },
      frequency: frequency,
      firstAction: trueFirstAction,
    });

    console.log("adjustmentFactor in onInteract:", adjustmentFactor);

    const interactionOrderAdjustmentFactor = interactionOrderAdjustment({
      interaction: interaction,
      initialFactors: {
        playful: initialFactors.playful,
        extrovert: initialFactors.extrovert,
        loving: initialFactors.loving,
        loveR: initialFactors.loveR,
      },
      firstAction: trueFirstAction,
    });

    console.log(
      "interactionOrderAdjustmentFactor in onInteract:",
      interactionOrderAdjustmentFactor
    );
    // Adjust mood factors using adjustmentFactor
    // Example: For a 'pet' interaction with diminishing returns

    // pulling out loving and playful adjustments.

    switch (interaction) {
      case "play":
        setFactors((prev) => ({
          ...prev,

          trustR: Math.max(
            0,
            Math.min(
              10,
              prev.trustR + adjustmentFactor + interactionOrderAdjustmentFactor
            )
          ),
          affectionR: Math.max(
            0,
            Math.min(
              10,
              prev.affectionR +
                adjustmentFactor +
                interactionOrderAdjustmentFactor
            )
          ),
        }));

        break;
      case "pet":
        setFactors((prev) => ({
          ...prev,

          trustR: Math.max(0, Math.min(10, prev.trustR + adjustmentFactor + 4)),
          affectionR: Math.max(
            0,
            Math.min(10, prev.affectionR + adjustmentFactor)
          ),
        }));

        break;
      case "feed":
        setFactors((prev) => ({
          ...prev,

          trustR: Math.max(
            0,
            Math.min(
              10,
              prev.trustR + adjustmentFactor + interactionOrderAdjustmentFactor
            )
          ),
          affectionR: Math.max(
            0,
            Math.min(
              10,
              prev.affectionR +
                adjustmentFactor +
                interactionOrderAdjustmentFactor
            )
          ),
        }));

        break;

      case "hold":
        setFactors((prev) => ({
          ...prev,

          trustR: Math.max(
            0,
            Math.min(
              10,
              prev.trustR + adjustmentFactor + interactionOrderAdjustmentFactor
            )
          ),
          affectionR: Math.max(
            0,
            Math.min(
              10,
              prev.affectionR +
                adjustmentFactor +
                interactionOrderAdjustmentFactor
            )
          ),
        }));

        break;
      case "ignore":
        setFactors((prev) => ({
          ...prev,
          // ingore isn't so much about immediate gratification as it is about building trust.

          trustR: Math.max(
            0,
            Math.min(
              10,
              prev.trustR + adjustmentFactor + interactionOrderAdjustmentFactor
            )
          ),
          affectionR: Math.max(
            0,
            Math.min(
              10,
              prev.affectionR +
                adjustmentFactor +
                interactionOrderAdjustmentFactor
            )
          ),
        }));

        break;
      case "pss pss":
        setFactors((prev) => ({
          ...prev,

          trustR: Math.max(
            0,
            Math.min(
              10,
              prev.trustR + adjustmentFactor + interactionOrderAdjustmentFactor
            )
          ),
          affectionR: Math.max(
            0,
            Math.min(
              10,
              prev.affectionR +
                adjustmentFactor +
                interactionOrderAdjustmentFactor
            )
          ),
        }));

        break;
      default:
        break;
    }
  };

  return [mood, { onInteract }];
}
