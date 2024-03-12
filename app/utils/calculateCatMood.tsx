type CatFactors = {
  loving: number;
  playful: number;
  trust: number;
  affection: number;
};

export function calculateCatMood(factors: CatFactors): number {
  const { loving, playful, trust, affection } = factors;

  // Calculate the base mood as the average of the factors
  let baseMood = (loving + playful + trust + affection) / 4;

  // Introduce randomness
  // Determine the chance of a random mood swing. For example, 10% chance.
  const chanceOfMoodSwing = 0.1; // 10%
  const isMoodSwinging = Math.random() < chanceOfMoodSwing;

  if (isMoodSwinging) {
    // Apply a random mood swing. This could be a positive or negative swing.
    // The magnitude of the swing could vary. Here, it's up to +/- 5 from the base mood, but capped at -10 to 10.
    const randomSwing = Math.random() * 10 - 5; // Random value between -5 and 5
    baseMood += randomSwing;

    // Cap the mood between -10 and 10
    baseMood = Math.max(-10, Math.min(10, baseMood));
  }

  return baseMood;
}

// Example cat factors
// const abigailFactors: CatFactors = {
//   loving: 6,
//   playful: -1,
//   trust: -1,
//   affection: 4,
// };

// const abigailMood = calculateCatMood(abigailFactors);
// console.log(`Abigail's mood: ${abigailMood.toFixed(2)}`);
