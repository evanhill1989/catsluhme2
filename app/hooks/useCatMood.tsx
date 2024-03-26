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
// do i really need to map a string to a string?
// also this only maps oscar?
// const interactionTypeMapping = {
//   "You petted Oscar.": "pet",
//   "You gave Oscar a treat.": "feed",
//   "You played with Oscar.": "play",
//   "You called Oscar over.": "pss pss",
//   "You held Oscar.": "hold",
//   "You ignored Oscar.": "ignore",
// };

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

  useEffect(() => {
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

    const key = `${firstActionKey}_${playfulnessKey}_${lovingKey}_${extrovertKey}_${relationshipLoveKey}_${frequencyKey}`;

    console.log("actionLog", actionLog);
    console.log("actionFrequencies", actionFrequencies);
    console.log("firstAction ", firstAction);
    console.log("key", key);

    

    switch (interaction) {
      case "pet":
        console.log(petAdjustments[key]);
        return petAdjustments[key] || 0;
      case "feed":
        console.log(feedAdjustments[key]);
        return feedAdjustments[key] || 0;
      case "play":
        console.log(playAdjustments[key]);
        return playAdjustments[key] || 0;
      case "hold":
        console.log(holdAdjustments[key]);
        return holdAdjustments[key] || 0;
      case "ignore":
        console.log(ignoreAdjustments[key]);
        return ignoreAdjustments[key] || 0;
      case "pss pss":
        console.log(pssPssAdjustments[key]);
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

    function interactionOrderAdjustment(interaction : InteractionType) {
      switch (interaction) {
        
    }

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

    const interactionOrderAdjustmentFactor = interactionOrderAdjustment(interaction);

    // Adjust mood factors using adjustmentFactor
    // Example: For a 'pet' interaction with diminishing returns

    switch (interaction) {
      case "play":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(0, Math.min(10, prev.loving + adjustmentFactor + interactionOrderAdjustmentFactor)),
          playful: Math.max(
            0,
            Math.min(10, prev.playful + adjustmentFactor * 0.1)
          ),
          trustR: Math.max(
            0,
            Math.min(10, prev.trustR + adjustmentFactor * 0.2)
          ),
        }));

        break;
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

        break;
      case "ignore":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(0, Math.min(10, prev.loving + 1 * adjustmentFactor)),
          // trustR: Math.max(0, Math.min(10, prev.trustR + 1 * adjustmentFactor)),
          // affectionR: Math.max(
          //   0,
          //   Math.min(10, prev.affectionR + 1 * adjustmentFactor)
          // ),
        }));

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

        break;
      default:
        break;
    }
  };

  return [mood, { onInteract }];
}
