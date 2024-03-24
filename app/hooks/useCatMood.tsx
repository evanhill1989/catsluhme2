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

type baseFactors = {
  loving: number;
  playful: number;
  trustR: number;
  affectionR: number;
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

  // const actionHistoryConverted = actionHistory.map((action) => {
  //   if (action contains "pss pss") {

  //   }
  // });

  // const interactionFrequencies = actionHistory.reduce((acc, action) => {
  //   const interaction = action;
  //   if (interaction) {
  //     acc[interaction] = (acc[interaction] || 0) + 1;
  //   }
  //   return acc;
  // }, {});

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
  // console.log("firstAction: ", firstAction); // This will log "feed" if it's the first action

  // To iterate over actions in order with their frequencies:
  actionFrequencies.forEach((count, action) => {
    // console.log(`actionFrequencies mapped out ${action}: ${count}`);
  });

  // ok so the issue is I'm not getting initialFactors below.
  function getPlayAdjustmentFactor(
    initialFactors: baseFactors,
    frequency: number,
    firstAction: string
  ) {
    // (logic exp. for 1st if)if cat's basic playful <2 and this is the first "play" action and it wasn't preceeded by pss pss
    if (
      initialFactors.playful < 2 &&
      frequency == 1 &&
      firstAction !== "pss pss"
    ) {
      return -0.1;
    } else if (
      initialFactors.playful < 2 &&
      frequency >= 2 &&
      firstAction !== "pss pss"
    ) {
      return -1;
    } else if (
      initialFactors.playful < 2 &&
      frequency == 1 &&
      firstAction === "pss pss"
    ) {
      return 0.2;
    } else if (
      initialFactors.playful < 2 &&
      frequency >= 2 &&
      firstAction === "pss pss"
    ) {
      return 0.1;
    }
    if (initialFactors.playful < 4) return 0;
    if (initialFactors.playful < 7) return 0.5;
    if (initialFactors.playful >= 7) {
      return 1;
    } else {
      return 1;
    }
  }

  function getBaseAdjustmentFactor(frequency: number, interaction) {
    // Example logic for diminishing returns
    // console.log(
    //   "@@@@@@@@frequency inside getBaseAdjustmentFactor: ",
    //   frequency
    // );
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
  // interactionFrequencies at top of useCatMood {Attempting to play with Oscar: 2, You petted Oscar: 1}

  const onInteract = (interaction) => {
    // Now consider interactionFrequencies to adjust the impact
    // Example: Fetch the current frequency for this interaction
    // current interactionFrequency format {Attempting to play with Oscar: 2}

    // console.log(`@@@@inside onInteract: ${interaction}`);
    setActionLog((prevActionLog) => {
      const updatedActionLog = [...prevActionLog, interaction];
      return updatedActionLog;
    });

    // const frequency = interactionFrequencies[interaction] || 0;
    // Below is better than above, but only problem is it's 1 behind...

    const frequency = (actionFrequencies.get(interaction) || 0) + 1;

    // console.log(
    //   // "!!!!!interactionFrequencies: ",
    //   // interactionFrequencies,
    //   "@@@@@@@@@@frequency at top of onInteract: ",
    //   frequency,
    //   "interaction: ",
    //   interaction
    // );
    const adjustmentFactor = getBaseAdjustmentFactor(frequency, interaction); // Implement this based on your diminishing returns logic
    const playAdjustmentFactor = getPlayAdjustmentFactor(
      initialFactors,
      frequency,
      firstAction
    );

    // Adjust mood factors using adjustmentFactor
    // Example: For a 'pet' interaction with diminishing returns

    switch (interaction) {
      case "play":
        setFactors((prev) => ({
          ...prev,
          loving: Math.max(0, Math.min(10, prev.loving + playAdjustmentFactor)),
          playful: Math.max(
            0,
            Math.min(10, prev.playful + playAdjustmentFactor * 0.1)
          ),
          trustR: Math.max(
            0,
            Math.min(10, prev.trustR + playAdjustmentFactor * 0.2)
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
          trustR: Math.max(0, Math.min(10, prev.trustR + 1 * adjustmentFactor)),
          affectionR: Math.max(
            0,
            Math.min(10, prev.affectionR + 1 * adjustmentFactor)
          ),
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
