"use client";

import React from "react";
import { useCatMood } from "../hooks/useCatMood";

const CatTest = () => {
  //   Dummy initial data to fulfill the hook's parameter requirements.
  const moodFactors = {
    loving: 5,
    playful: 5,
    trustR: 5,
    affectionR: 5,
  };

  const baseFactors = {
    loving: 5,
    playful: 5,
    extrovert: true,
    trustR: 5,
    affectionR: 5,
    loveR: 5,
  };

  // Using the hook with dummy data.
  const [mood, { onInteract }] = useCatMood(moodFactors, baseFactors);

  // Handling interaction for testing - let's just log the result for simplicity.
  const handleInteraction = (type) => {
    console.log(`Interacting with type: ${type}`);
    onInteract(type);
  };

  return (
    <div>
      <h1>Test useCatMood Hook</h1>
      {/* <p>Mood: {mood}</p>
      <p>Final Adjustment Factor: {finalAdjustmentFactor}</p>
      <button onClick={() => handleInteraction("pet")}>Pet</button> */}
    </div>
  );
};

export default CatTest;
