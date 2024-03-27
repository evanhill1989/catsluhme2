export const playAdjustments: Record<string, number> = {
  // Key format: ${playfulnessKey}_${lovingKey}_${extrovertKey}_${relationshipLoveKey}_${frequencyKey}

  // Yes we need all of these hardcoded keys.
  // No, there's no way to programmatically generate cat reaction behavior with all these nuanced interdependant, order-dependant influences

  //   "firstAction" "playful" "loving" "extrovert" "relationshipLove" "frequency",

  low_low_true_low_low: -0.1,
  low_low_true_low_medium: -0.2,
  low_low_true_low_max: -0.3,
  low_low_true_medium_low: 0,
  low_low_true_medium_medium: 0,
  low_low_true_medium_max: -0.1,
  low_low_true_max_low: 0.1,
  low_low_true_max_medium: 0,
  low_low_true_max_max: 0,

  low_high_true_low_low: 6,
  low_high_true_low_medium: -0.1,
  low_high_true_low_max: -0.2,
  low_high_true_medium_low: 0.1,
  low_high_true_medium_medium: 0,
  low_high_true_medium_max: -0.1,
  low_high_true_max_low: 0.2,
  low_high_true_max_medium: 0.1,
  low_high_true_max_max: 0,

  high_low_true_low_low: 0.1,
  high_low_true_low_medium: 0,
  high_low_true_low_max: -0.1,
  high_low_true_medium_low: 0.3,
  high_low_true_medium_medium: 0.2,
  high_low_true_medium_max: 0.1,
  high_low_true_max_low: 1,
  high_low_true_max_medium: 0.5,
  high_low_true_max_max: 0.25,

  high_high_true_low_low: 0.2,
  high_high_true_low_medium: 0.3,
  high_high_true_low_max: 0.4,
  high_high_true_medium_low: 0.5,
  high_high_true_medium_medium: 0.25,
  high_high_true_medium_max: 0.1,
  high_high_true_max_low: 1.5,
  high_high_true_max_medium: 0.75,
  high_high_true_max_max: 0.3,

  // Add more keys for combinations with extroverted = false

  low_low_false_low_low: -0.3,
  low_low_false_low_medium: -0.75,
  low_low_false_low_max: -1.5,
  low_low_false_medium_low: -0.2,
  low_low_false_medium_medium: -0.5,
  low_low_false_medium_max: -1,
  low_low_false_max_low: -0.1,
  low_low_false_max_medium: -0.3,
  low_low_false_max_max: -0.5,

  low_high_false_low_low: -0.1,
  low_high_false_low_medium: -0.2,
  low_high_false_low_max: -0.3,
  low_high_false_medium_low: 0,
  low_high_false_medium_medium: -0.1,
  low_high_false_medium_max: -0.2,
  low_high_false_max_low: 1,
  low_high_false_max_medium: 0.5,
  low_high_false_max_max: 0.1,

  high_low_false_low_low: -0.2,
  high_low_false_low_medium: -0.3,
  high_low_false_low_max: -0.4,
  high_low_false_medium_low: 0,
  high_low_false_medium_medium: -0.2,
  high_low_false_medium_max: -0.3,
  high_low_false_max_low: 0.2,
  high_low_false_max_medium: 0,
  high_low_false_max_max: -0.2,

  high_high_false_low_low: 0,
  high_high_false_low_medium: -0.1,
  high_high_false_low_max: -0.2,
  high_high_false_medium_low: 1,
  high_high_false_medium_medium: 0.5,
  high_high_false_medium_max: 0,
  high_high_false_max_low: 2,
  high_high_false_max_medium: 1,
  high_high_false_max_max: 0.5,
};

export const holdAdjustments: Record<string, number> = {
  hold_low_low_true_low_low: -0.1,
  hold_low_low_true_low_medium: -0.2,
  hold_low_low_true_low_max: -0.3,
  hold_low_low_true_medium_low: -0.4,
  hold_low_low_true_medium_medium: -0.5,
  hold_low_low_true_medium_max: -0.6,
  hold_low_low_true_max_low: -0.7,
  hold_low_low_true_max_medium: -0.8,
  hold_low_low_true_max_max: -0.9,
  hold_low_high_true_low_low: -0.1,
  hold_low_high_true_low_medium: -0.2,
  hold_low_high_true_low_max: -0.3,
  hold_low_high_true_medium_low: -0.4,
  hold_low_high_true_medium_medium: -0.5,
  hold_low_high_true_medium_max: -0.6,
  hold_low_high_true_max_low: -0.7,
  hold_low_high_true_max_medium: -0.8,
  hold_low_high_true_max_max: -0.9,
  hold_high_low_true_low_low: -0.1,
  hold_high_low_true_low_medium: -0.2,
  hold_high_low_true_low_max: -0.3,
  hold_high_low_true_medium_low: -0.4,
  hold_high_low_true_medium_medium: -0.5,
  hold_high_low_true_medium_max: -0.6,
  hold_high_low_true_max_low: -0.7,
  hold_high_low_true_max_medium: -0.8,
  hold_high_low_true_max_max: -0.9,
  hold_high_high_true_low_low: -0.1,
  hold_high_high_true_low_medium: -0.2,
  hold_high_high_true_low_max: -0.3,
  hold_high_high_true_medium_low: -0.4,
  hold_high_high_true_medium_medium: -0.5,
  hold_high_high_true_medium_max: -0.6,
  hold_high_high_true_max_low: -0.7,
  hold_high_high_true_max_medium: -0.8,
  hold_high_high_true_max_max: -0.9,
  hold_low_low_false_low_low: -0.1,
  hold_low_low_false_low_medium: -0.2,
  hold_low_low_false_low_max: -0.3,
  hold_low_low_false_medium_low: -0.4,
  hold_low_low_false_medium_medium: -0.5,
  hold_low_low_false_medium_max: -0.6,
  hold_low_low_false_max_low: -0.7,
  hold_low_low_false_max_medium: -0.8,
  hold_low_low_false_max_max: -0.9,
  hold_low_high_false_low_low: -0.1,
  hold_low_high_false_low_medium: -0.2,
  hold_low_high_false_low_max: -0.3,
  hold_low_high_false_medium_low: -0.4,
  hold_low_high_false_medium_medium: -0.5,
  hold_low_high_false_medium_max: -0.6,
  hold_low_high_false_max_low: -0.7,
  hold_low_high_false_max_medium: -0.8,
  hold_low_high_false_max_max: -0.9,
  hold_high_low_false_low_low: -0.1,
  hold_high_low_false_low_medium: -0.2,
  hold_high_low_false_low_max: -0.3,
  hold_high_low_false_medium_low: -0.4,
  hold_high_low_false_medium_medium: -0.5,
  hold_high_low_false_medium_max: -0.6,
  hold_high_low_false_max_low: -0.7,
  hold_high_low_false_max_medium: -0.8,
  hold_high_low_false_max_max: -0.9,
  hold_high_high_false_low_low: -0.1,
  hold_high_high_false_low_medium: -0.2,
  hold_high_high_false_low_max: -0.3,
  hold_high_high_false_medium_low: -0.4,
  hold_high_high_false_medium_medium: -0.5,
  hold_high_high_false_medium_max: -0.6,
  hold_high_high_false_max_low: -0.7,
  hold_high_high_false_max_medium: -0.8,
  hold_high_high_false_max_max: -0.9,
};

export const ignoreAdjustments: Record<string, number> = {
  ignore_low_low_true_low_low: -0.1,
  ignore_low_low_true_low_medium: -0.2,
  ignore_low_low_true_low_max: -0.3,
  ignore_low_low_true_medium_low: -0.4,
  ignore_low_low_true_medium_medium: -0.5,
  ignore_low_low_true_medium_max: -0.6,
  ignore_low_low_true_max_low: -0.7,
  ignore_low_low_true_max_medium: -0.8,
  ignore_low_low_true_max_max: -0.9,
  ignore_low_high_true_low_low: -0.1,
  ignore_low_high_true_low_medium: -0.2,
  ignore_low_high_true_low_max: -0.3,
  ignore_low_high_true_medium_low: -0.4,
  ignore_low_high_true_medium_medium: -0.5,
  ignore_low_high_true_medium_max: -0.6,
  ignore_low_high_true_max_low: -0.7,
  ignore_low_high_true_max_medium: -0.8,
  ignore_low_high_true_max_max: -0.9,
  ignore_high_low_true_low_low: -0.1,
  ignore_high_low_true_low_medium: -0.2,
  ignore_high_low_true_low_max: -0.3,
  ignore_high_low_true_medium_low: -0.4,
  ignore_high_low_true_medium_medium: -0.5,
  ignore_high_low_true_medium_max: -0.6,
  ignore_high_low_true_max_low: -0.7,
  ignore_high_low_true_max_medium: -0.8,
  ignore_high_low_true_max_max: -0.9,
  ignore_high_high_true_low_low: -0.1,
  ignore_high_high_true_low_medium: -0.2,
  ignore_high_high_true_low_max: -0.3,
  ignore_high_high_true_medium_low: -0.4,
  ignore_high_high_true_medium_medium: -0.5,
  ignore_high_high_true_medium_max: -0.6,
  ignore_high_high_true_max_low: -0.7,
  ignore_high_high_true_max_medium: -0.8,
  ignore_high_high_true_max_max: -0.9,
  ignore_low_low_false_low_low: -0.1,
  ignore_low_low_false_low_medium: -0.2,
  ignore_low_low_false_low_max: -0.3,
  ignore_low_low_false_medium_low: -0.4,
  ignore_low_low_false_medium_medium: -0.5,
  ignore_low_low_false_medium_max: -0.6,
  ignore_low_low_false_max_low: -0.7,
  ignore_low_low_false_max_medium: -0.8,
  ignore_low_low_false_max_max: -0.9,
  ignore_low_high_false_low_low: -0.1,
  ignore_low_high_false_low_medium: -0.2,
  ignore_low_high_false_low_max: -0.3,
  ignore_low_high_false_medium_low: -0.4,
  ignore_low_high_false_medium_medium: -0.5,
  ignore_low_high_false_medium_max: -0.6,
  ignore_low_high_false_max_low: -0.7,
  ignore_low_high_false_max_medium: -0.8,
  ignore_low_high_false_max_max: -0.9,
  ignore_high_low_false_low_low: -0.1,
  ignore_high_low_false_low_medium: -0.2,
  ignore_high_low_false_low_max: -0.3,
  ignore_high_low_false_medium_low: -0.4,
  ignore_high_low_false_medium_medium: -0.5,
  ignore_high_low_false_medium_max: -0.6,
  ignore_high_low_false_max_low: -0.7,
  ignore_high_low_false_max_medium: -0.8,
  ignore_high_low_false_max_max: -0.9,
  ignore_high_high_false_low_low: -0.1,
  ignore_high_high_false_low_medium: -0.2,
  ignore_high_high_false_low_max: -0.3,
  ignore_high_high_false_medium_low: -0.4,
  ignore_high_high_false_medium_medium: -0.5,
  ignore_high_high_false_medium_max: -0.6,
  ignore_high_high_false_max_low: -0.7,
  ignore_high_high_false_max_medium: -0.8,
  ignore_high_high_false_max_max: -0.9,
};

export const feedAdjustments: Record<string, number> = {
  feed_low_low_true_low_low: -0.1,
  feed_low_low_true_low_medium: -0.2,
  feed_low_low_true_low_max: -0.3,
  feed_low_low_true_medium_low: -0.4,
  feed_low_low_true_medium_medium: -0.5,
  feed_low_low_true_medium_max: -0.6,
  feed_low_low_true_max_low: -0.7,
  feed_low_low_true_max_medium: -0.8,
  feed_low_low_true_max_max: -0.9,

  feed_low_high_true_low_low: -0.1,
  feed_low_high_true_low_medium: -0.2,
  feed_low_high_true_low_max: -0.3,
  feed_low_high_true_medium_low: -0.4,
  feed_low_high_true_medium_medium: -0.5,
  feed_low_high_true_medium_max: -0.6,
  feed_low_high_true_max_low: -0.7,
  feed_low_high_true_max_medium: -0.8,
  feed_low_high_true_max_max: -0.9,

  feed_high_low_true_low_low: -0.1,
  feed_high_low_true_low_medium: -0.2,
  feed_high_low_true_low_max: -0.3,
  feed_high_low_true_medium_low: -0.4,
  feed_high_low_true_medium_medium: -0.5,
  feed_high_low_true_medium_max: -0.6,
  feed_high_low_true_max_low: -0.7,
  feed_high_low_true_max_medium: -0.8,
  feed_high_low_true_max_max: -0.9,

  feed_high_high_true_low_low: -0.1,
  feed_high_high_true_low_medium: -0.2,
  feed_high_high_true_low_max: -0.3,
  feed_high_high_true_medium_low: -0.4,
  feed_high_high_true_medium_medium: -0.5,
  feed_high_high_true_medium_max: -0.6,
  feed_high_high_true_max_low: -0.7,
  feed_high_high_true_max_medium: -0.8,
  feed_high_high_true_max_max: -0.9,

  // Add more keys for combinations with extroverted = false

  feed_low_low_false_low_low: -0.1,
  feed_low_low_false_low_medium: -0.2,
  feed_low_low_false_low_max: -0.3,
  feed_low_low_false_medium_low: -0.4,
  feed_low_low_false_medium_medium: -0.5,
  feed_low_low_false_medium_max: -0.6,
  feed_low_low_false_max_low: -0.7,
  feed_low_low_false_max_medium: -0.8,
  feed_low_low_false_max_max: -0.9,

  feed_low_high_false_low_low: -0.1,
  feed_low_high_false_low_medium: -0.2,
  feed_low_high_false_low_max: -0.3,
  feed_low_high_false_medium_low: -0.4,
  feed_low_high_false_medium_medium: -0.5,
  feed_low_high_false_medium_max: -0.6,
  feed_low_high_false_max_low: -0.7,
  feed_low_high_false_max_medium: -0.8,
  feed_low_high_false_max_max: -0.9,

  feed_high_low_false_low_low: -0.1,
  feed_high_low_false_low_medium: -0.2,
  feed_high_low_false_low_max: -0.3,
  feed_high_low_false_medium_low: -0.4,
  feed_high_low_false_medium_medium: -0.5,
  feed_high_low_false_medium_max: -0.6,
  feed_high_low_false_max_low: -0.7,
  feed_high_low_false_max_medium: -0.8,
  feed_high_low_false_max_max: -0.9,

  feed_high_high_false_low_low: -0.1,
  feed_high_high_false_low_medium: -0.2,
  feed_high_high_false_low_max: -0.3,
  feed_high_high_false_medium_low: -0.4,
  feed_high_high_false_medium_medium: -0.5,
  feed_high_high_false_medium_max: -0.6,
  feed_high_high_false_max_low: -0.7,
  feed_high_high_false_max_medium: -0.8,
  feed_high_high_false_max_max: -0.9,
};

export const petAdjustments: Record<string, number> = {
  pet_low_low_true_low_low: -0.1,
  pet_low_low_true_low_medium: -0.2,
  pet_low_low_true_low_max: -0.3,
  pet_low_low_true_medium_low: -0.4,
  pet_low_low_true_medium_medium: -0.5,
  pet_low_low_true_medium_max: -0.6,
  pet_low_low_true_max_low: -0.7,
  pet_low_low_true_max_medium: -0.8,
  pet_low_low_true_max_max: -0.9,

  pet_low_high_true_low_low: -0.1,
  pet_low_high_true_low_medium: -0.2,
  pet_low_high_true_low_max: -0.3,
  pet_low_high_true_medium_low: -0.4,
  pet_low_high_true_medium_medium: -0.5,
  pet_low_high_true_medium_max: -0.6,
  pet_low_high_true_max_low: -0.7,
  pet_low_high_true_max_medium: -0.8,
  pet_low_high_true_max_max: -0.9,

  pet_high_low_true_low_low: -0.1,
  pet_high_low_true_low_medium: -0.2,
  pet_high_low_true_low_max: -0.3,
  pet_high_low_true_medium_low: -0.4,
  pet_high_low_true_medium_medium: -0.5,
  pet_high_low_true_medium_max: -0.6,
  pet_high_low_true_max_low: -0.7,
  pet_high_low_true_max_medium: -0.8,
  pet_high_low_true_max_max: -0.9,

  pet_high_high_true_low_low: -0.1,
  pet_high_high_true_low_medium: -0.2,
  pet_high_high_true_low_max: -0.3,
  pet_high_high_true_medium_low: -0.4,
  pet_high_high_true_medium_medium: -0.5,
  pet_high_high_true_medium_max: -0.6,
  pet_high_high_true_max_low: -0.7,
  pet_high_high_true_max_medium: -0.8,
  pet_high_high_true_max_max: -0.9,

  // Add more keys for combinations with extroverted = false

  pet_low_low_false_low_low: -0.1,
  pet_low_low_false_low_medium: -0.2,
  pet_low_low_false_low_max: -0.3,
  pet_low_low_false_medium_low: -0.4,
  pet_low_low_false_medium_medium: -0.5,
  pet_low_low_false_medium_max: -0.6,
  pet_low_low_false_max_low: -0.7,
  pet_low_low_false_max_medium: -0.8,
  pet_low_low_false_max_max: -0.9,

  pet_low_high_false_low_low: -0.1,
  pet_low_high_false_low_medium: -0.2,
  pet_low_high_false_low_max: -0.3,
  pet_low_high_false_medium_low: -0.4,
  pet_low_high_false_medium_medium: -0.5,
  pet_low_high_false_medium_max: -0.6,
  pet_low_high_false_max_low: -0.7,
  pet_low_high_false_max_medium: -0.8,
  pet_low_high_false_max_max: -0.9,

  pet_high_low_false_low_low: -0.1,
  pet_high_low_false_low_medium: -0.2,
  pet_high_low_false_low_max: -0.3,
  pet_high_low_false_medium_low: -0.4,
  pet_high_low_false_medium_medium: -0.5,
  pet_high_low_false_medium_max: -0.6,
  pet_high_low_false_max_low: -0.7,
  pet_high_low_false_max_medium: -0.8,
  pet_high_low_false_max_max: -0.9,

  pet_high_high_false_low_low: -0.1,
  pet_high_high_false_low_medium: -0.2,
  pet_high_high_false_low_max: -0.3,
  pet_high_high_false_medium_low: -0.4,
  pet_high_high_false_medium_medium: -0.5,
  pet_high_high_false_medium_max: -0.6,
  pet_high_high_false_max_low: -0.7,
  pet_high_high_false_max_medium: -0.8,
  pet_high_high_false_max_max: -0.9,
};

export const pssPssAdjustments: Record<string, number> = {
  pss_pss_low_low_true_low_low: -0.1,
  pss_pss_low_low_true_low_medium: -0.2,
  pss_pss_low_low_true_low_max: -0.3,
  pss_pss_low_low_true_medium_low: -0.4,
  pss_pss_low_low_true_medium_medium: -0.5,
  pss_pss_low_low_true_medium_max: -0.6,
  pss_pss_low_low_true_max_low: -0.7,
  pss_pss_low_low_true_max_medium: -0.8,
  pss_pss_low_low_true_max_max: -0.9,

  pss_pss_low_high_true_low_low: -0.1,
  pss_pss_low_high_true_low_medium: -0.2,
  pss_pss_low_high_true_low_max: -0.3,
  pss_pss_low_high_true_medium_low: -0.4,
  pss_pss_low_high_true_medium_medium: -0.5,
  pss_pss_low_high_true_medium_max: -0.6,
  pss_pss_low_high_true_max_low: -0.7,
  pss_pss_low_high_true_max_medium: -0.8,
  pss_pss_low_high_true_max_max: -0.9,

  pss_pss_high_low_true_low_low: -0.1,
  pss_pss_high_low_true_low_medium: -0.2,
  pss_pss_high_low_true_low_max: -0.3,
  pss_pss_high_low_true_medium_low: -0.4,
  pss_pss_high_low_true_medium_medium: -0.5,
  pss_pss_high_low_true_medium_max: -0.6,
  pss_pss_high_low_true_max_low: -0.7,
  pss_pss_high_low_true_max_medium: -0.8,
  pss_pss_high_low_true_max_max: -0.9,

  pss_pss_high_high_true_low_low: -0.1,
  pss_pss_high_high_true_low_medium: -0.2,
  pss_pss_high_high_true_low_max: -0.3,
  pss_pss_high_high_true_medium_low: -0.4,
  pss_pss_high_high_true_medium_medium: -0.5,
  pss_pss_high_high_true_medium_max: -0.6,
  pss_pss_high_high_true_max_low: -0.7,
  pss_pss_high_high_true_max_medium: -0.8,
  pss_pss_high_high_true_max_max: -0.9,

  // Add more keys for combinations with extroverted = false

  pss_pss_low_low_false_low_low: -0.1,
  pss_pss_low_low_false_low_medium: -0.2,
  pss_pss_low_low_false_low_max: -0.3,
  pss_pss_low_low_false_medium_low: -0.4,
  pss_pss_low_low_false_medium_medium: -0.5,
  pss_pss_low_low_false_medium_max: -0.6,
  pss_pss_low_low_false_max_low: -0.7,
  pss_pss_low_low_false_max_medium: -0.8,
  pss_pss_low_low_false_max_max: -0.9,

  pss_pss_low_high_false_low_low: -0.1,
  pss_pss_low_high_false_low_medium: -0.2,
  pss_pss_low_high_false_low_max: -0.3,
  pss_pss_low_high_false_medium_low: -0.4,
  pss_pss_low_high_false_medium_medium: -0.5,
  pss_pss_low_high_false_medium_max: -0.6,
  pss_pss_low_high_false_max_low: -0.7,
  pss_pss_low_high_false_max_medium: -0.8,
  pss_pss_low_high_false_max_max: -0.9,

  pss_pss_high_low_false_low_low: -0.1,
  pss_pss_high_low_false_low_medium: -0.2,
  pss_pss_high_low_false_low_max: -0.3,
  pss_pss_high_low_false_medium_low: -0.4,
  pss_pss_high_low_false_medium_medium: -0.5,
  pss_pss_high_low_false_medium_max: -0.6,
  pss_pss_high_low_false_max_low: -0.7,
  pss_pss_high_low_false_max_medium: -0.8,
  pss_pss_high_low_false_max_max: -0.9,

  pss_pss_high_high_false_low_low: -0.1,
  pss_pss_high_high_false_low_medium: -0.2,
  pss_pss_high_high_false_low_max: -0.3,
  pss_pss_high_high_false_medium_low: -0.4,
  pss_pss_high_high_false_medium_medium: -0.5,
  pss_pss_high_high_false_medium_max: -0.6,
  pss_pss_high_high_false_max_low: -0.7,
  pss_pss_high_high_false_max_medium: -0.8,
  pss_pss_high_high_false_max_max: -0.9,
};

// what we replaced with this decision table:
// ok so the issue is I'm not getting initialFactors below.
// function getPlayAdjustmentFactor(
//   initialFactors: baseFactors,
//   frequency: number,
//   firstAction: string
// ) {
//   // (logic explanation for 1st if : if cat's basic playful <2 and this is the first "play" action and it wasn't preceeded by pss pss
//   if (
//     initialFactors.playful < 2 &&
//     frequency == 1 &&
//     firstAction !== "pss pss"
//   ) {
//     return -0.1;
//   } else if (
//     initialFactors.playful < 2 &&
//     frequency >= 2 &&
//     firstAction !== "pss pss"
//   ) {
//     return -1;
//   } else if (
//     initialFactors.playful < 2 &&
//     frequency == 1 &&
//     firstAction === "pss pss"
//   ) {
//     return 0.2;
//   } else if (
//     initialFactors.playful < 2 &&
//     frequency >= 2 &&
//     firstAction === "pss pss"
//   ) {
//     return 0.1;
//   }
//   if (initialFactors.playful < 4) return 0;
//   if (initialFactors.playful < 7) return 0.5;
//   if (initialFactors.playful >= 7) {
//     return 1;
//   } else {
//     return 1;
//   }
// }

// function getBaseAdjustmentFactor(
//     frequency: number,
//     interaction: InteractionType
//   ) {
//     switch (interaction) {
//       case "pet":
//         if (frequency <= 3) return 1; // Full effect
//         if (frequency <= 6) return 0.75; // Reduced effect
//         if (frequency <= 9) return 0.5; // Even more reduced
//         return -0.25; // Negative effect after 9 interactions
//       case "feed":
//         if (frequency <= 3) return 1; // Full effect
//         if (frequency <= 6) return 0.75; // Reduced effect
//         if (frequency <= 9) return 0.5; // Even more reduced
//         return -0.25; // Negative effect after 9 interactions
//       case "play":
//         if (frequency <= 3) return 1; // Full effect
//         if (frequency <= 6) return 0.75; // Reduced effect
//         if (frequency <= 9) return 0.5; // Even more reduced
//         return -0.25; // Negative effect after 9 interactions
//       case "hold":
//         if (frequency <= 3) return 1; // Full effect
//         if (frequency <= 6) return 0.75; // Reduced effect
//         if (frequency <= 9) return 0.5; // Even more reduced
//         return -0.25; // Negative effect after 9 interactions
//       case "ignore":
//         if (frequency <= 3) return 2; // Full effect
//         if (frequency <= 6) return -0.1; // Reduced effect
//         if (frequency <= 9) return -0.5; // Even more reduced
//         return -1; // Negative effect after 9 interactions
//       case "pss pss":
//         if (frequency <= 3) return 2; // Full effect
//         if (frequency <= 6) return -0.1; // Reduced effect
//         if (frequency <= 9) return -0.5; // Even more reduced
//         return -1; // Negative effect after 9 interactions
//     }
//   }
