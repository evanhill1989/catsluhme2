// Key format: ${playfulnessKey}_${lovingKey}_${extrovertKey}_${relationshipLoveKey}_${frequencyKey}

// Yes we need all of these hardcoded keys.
// No, there's no way to programmatically generate cat reaction behavior with all these nuanced interdependant, order-dependant influences

export const playAdjustments: Record<string, number> = {
  low_low_true_low_low: -0.1, // low playfulness, low loving, true extrovert,
  low_low_true_low_medium: -0.2,
  low_low_true_low_max: -0.3,
  low_low_true_medium_low: 0,
  low_low_true_medium_medium: 0,
  low_low_true_medium_max: -0.1,
  low_low_true_max_low: 0.1,
  low_low_true_max_medium: 0,
  low_low_true_max_max: 0,

  low_high_true_low_low: 0, // low playfulness, high loving, true extrovert
  low_high_true_low_medium: -0.1,
  low_high_true_low_max: -0.2,
  low_high_true_medium_low: 0.1,
  low_high_true_medium_medium: 0,
  low_high_true_medium_max: -0.1,
  low_high_true_max_low: 0.2,
  low_high_true_max_medium: 0.1,
  low_high_true_max_max: 0,

  high_low_true_low_low: 0.1, // high playfulness, low loving, true extrovert
  high_low_true_low_medium: 0,
  high_low_true_low_max: -0.1,
  high_low_true_medium_low: 0.3,
  high_low_true_medium_medium: 0.2,
  high_low_true_medium_max: 0.1,
  high_low_true_max_low: 1,
  high_low_true_max_medium: 0.5,
  high_low_true_max_max: 0.25,

  high_high_true_low_low: 0.2, // high playfulness, high loving, true extrovert
  high_high_true_low_medium: 0.3,
  high_high_true_low_max: 0.4,
  high_high_true_medium_low: 0.5,
  high_high_true_medium_medium: 0.25,
  high_high_true_medium_max: 0.1,
  high_high_true_max_low: 1.5,
  high_high_true_max_medium: 0.75,
  high_high_true_max_max: 0.3,

  // Add more keys for combinations with extroverted = false

  low_low_false_low_low: -0.3, // low playfulness, low loving, false extrovert
  low_low_false_low_medium: -0.75,
  low_low_false_low_max: -1.5,
  low_low_false_medium_low: -0.2,
  low_low_false_medium_medium: -0.5,
  low_low_false_medium_max: -1,
  low_low_false_max_low: -0.1,
  low_low_false_max_medium: -0.3,
  low_low_false_max_max: -0.5,

  low_high_false_low_low: -0.1, // low playfulness, high loving, false extrovert
  low_high_false_low_medium: -0.2,
  low_high_false_low_max: -0.3,
  low_high_false_medium_low: 0,
  low_high_false_medium_medium: -0.1,
  low_high_false_medium_max: -0.2,
  low_high_false_max_low: 1,
  low_high_false_max_medium: 0.5,
  low_high_false_max_max: 0.1,

  high_low_false_low_low: -0.2, // high playfulness, low loving, false extrovert
  high_low_false_low_medium: -0.3,
  high_low_false_low_max: -0.4,
  high_low_false_medium_low: 0,
  high_low_false_medium_medium: -0.2,
  high_low_false_medium_max: -0.3,
  high_low_false_max_low: 0.2,
  high_low_false_max_medium: 0,
  high_low_false_max_max: -0.2,

  high_high_false_low_low: 0, // high playfulness, high loving, false extrovert
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
  low_low_true_low_low: -0.3,
  low_low_true_low_medium: -0.5,
  low_low_true_low_max: -0.7,
  low_low_true_medium_low: -0.1,
  low_low_true_medium_medium: -0.2,
  low_low_true_medium_max: -0.3,
  low_low_true_max_low: 0.1,
  low_low_true_max_medium: 0,
  low_low_true_max_max: -0.1,

  low_high_true_low_low: 0.1,
  low_high_true_low_medium: 0,
  low_high_true_low_max: -0.1,
  low_high_true_medium_low: 0.3,
  low_high_true_medium_medium: 0.2,
  low_high_true_medium_max: 0.1,
  low_high_true_max_low: 1.5, // highest value because high loving, extrovert, max relationshiplove
  low_high_true_max_medium: 0.75,
  low_high_true_max_max: 0.5,

  high_low_true_low_low: -0.4,
  high_low_true_low_medium: -0.5,
  high_low_true_low_max: -0.6,
  high_low_true_medium_low: -0.2,
  high_low_true_medium_medium: -0.3,
  high_low_true_medium_max: -0.4,
  high_low_true_max_low: 0.1,
  high_low_true_max_medium: 0,
  high_low_true_max_max: -0.1,

  high_high_true_low_low: 0,
  high_high_true_low_medium: -0.1,
  high_high_true_low_max: -0.2,
  high_high_true_medium_low: 0.2,
  high_high_true_medium_medium: 0.1,
  high_high_true_medium_max: 0,
  high_high_true_max_low: 1.5,
  high_high_true_max_medium: 0.75,
  high_high_true_max_max: 0.5,

  low_low_false_low_low: -1, // low playfulness. low loving, introverted
  low_low_false_low_medium: -1.5,
  low_low_false_low_max: -2, // Lowest possible value - low loving, introverted, low relationshiplove
  low_low_false_medium_low: -0.5,
  low_low_false_medium_medium: -0.6,
  low_low_false_medium_max: -0.75,
  low_low_false_max_low: -0.2,
  low_low_false_max_medium: -0.3,
  low_low_false_max_max: -0.4,

  low_high_false_low_low: -0.2, // low playfulness, high loving, introvert
  low_high_false_low_medium: -0.3,
  low_high_false_low_max: -0.4,
  low_high_false_medium_low: 0.2, // if introvert then existing relationshiplove is important, also high loving tendencies
  low_high_false_medium_medium: 0.4,
  low_high_false_medium_max: 0.6,
  low_high_false_max_low: 1.5,
  low_high_false_max_medium: 0.75,
  low_high_false_max_max: 0.5,

  high_low_false_low_low: -1, // high playfulness, low loving, introvert
  high_low_false_low_medium: -1.5,
  high_low_false_low_max: -2,
  high_low_false_medium_low: -0.5,
  high_low_false_medium_medium: -0.6,
  high_low_false_medium_max: -0.75,
  high_low_false_max_low: -0.2,
  high_low_false_max_medium: -0.3,
  high_low_false_max_max: -0.4,

  high_high_false_low_low: -0.2, // high playfulness, high loving, introvert
  high_high_false_low_medium: -0.3,
  high_high_false_low_max: -0.4,
  high_high_false_medium_low: 0.2,
  high_high_false_medium_medium: 0.4,
  high_high_false_medium_max: 0.6,
  high_high_false_max_low: 1.5,
  high_high_false_max_medium: 0.75,
  high_high_false_max_max: 0.5,
};

export const ignoreAdjustments: Record<string, number> = {
  low_low_true_low_low: 0.1, // low playfulness, low loving, extrovert
  low_low_true_low_medium: 0,
  low_low_true_low_max: 0,
  low_low_true_medium_low: 0.1,
  low_low_true_medium_medium: 0,
  low_low_true_medium_max: 0,
  low_low_true_max_low: 0.1,
  low_low_true_max_medium: 0,
  low_low_true_max_max: 0,

  low_high_true_low_low: -0.3, // low playfulness, high loving, extrovert
  low_high_true_low_medium: -0.4,
  low_high_true_low_max: -0.5,
  low_high_true_medium_low: -0.4, // ignoring high loving extrovert that you have a relationship with is bad probz
  low_high_true_medium_medium: -0.5,
  low_high_true_medium_max: -0.6,
  low_high_true_max_low: -0.4,
  low_high_true_max_medium: -0.5,
  low_high_true_max_max: -0.6,

  high_low_true_low_low: -0.1, // high playfulness, low loving, extrovert
  high_low_true_low_medium: -0.2,
  high_low_true_low_max: -0.3,
  high_low_true_medium_low: 0,
  high_low_true_medium_medium: -0.1,
  high_low_true_medium_max: -0.2,
  high_low_true_max_low: 0,
  high_low_true_max_medium: -0.1,
  high_low_true_max_max: -0.2,

  high_high_true_low_low: -0.5, // high playfulness, high loving, extrovert
  high_high_true_low_medium: -1,
  high_high_true_low_max: -1.5,
  high_high_true_medium_low: -0.75,
  high_high_true_medium_medium: -1,
  high_high_true_medium_max: -1.25,
  high_high_true_max_low: -1,
  high_high_true_max_medium: -1.25,
  high_high_true_max_max: -1.5,

  low_low_false_low_low: 0, // low playfulness, low loving, introvert
  low_low_false_low_medium: 0.1, // ignoring the introvert can allow them space to be comfortable
  low_low_false_low_max: 0.2,
  low_low_false_medium_low: 0.1, // once some relationship established ignoring might be negative
  low_low_false_medium_medium: 0,
  low_low_false_medium_max: -0.1,
  low_low_false_max_low: 0.1,
  low_low_false_max_medium: -0.1,
  low_low_false_max_max: -0.2,

  low_high_false_low_low: 0.1, // low playfulness, high loving, introvert
  low_high_false_low_medium: 0.2,
  low_high_false_low_max: 0.3,
  low_high_false_medium_low: 0.1,
  low_high_false_medium_medium: -0.2,
  low_high_false_medium_max: -0.4,
  low_high_false_max_low: 0.1,
  low_high_false_max_medium: -0.3,
  low_high_false_max_max: -0.5,

  high_low_false_low_low: 0.1, // high playfulness, low loving, introvert
  high_low_false_low_medium: 0,
  high_low_false_low_max: 0,
  high_low_false_medium_low: 0.1,
  high_low_false_medium_medium: 0,
  high_low_false_medium_max: -0.1,
  high_low_false_max_low: 0.1,
  high_low_false_max_medium: 0,
  high_low_false_max_max: -0.1,

  high_high_false_low_low: 0.1, // high playfulness, high loving, introvert
  high_high_false_low_medium: 0,
  high_high_false_low_max: 0,
  high_high_false_medium_low: 0.1,
  high_high_false_medium_medium: -0.1,
  high_high_false_medium_max: -0.2,
  high_high_false_max_low: 0,
  high_high_false_max_medium: -0.1,
  high_high_false_max_max: -0.2,
};

export const feedAdjustments: Record<string, number> = {
  // feeding adjustments won't ever be too negative or bothersome.
  // handle the cases where they are very positive with a special function
  // also don't see the effect of playfullness or loving being strong either way
  // probably need a special hungriness function, but don't want to double the size of the decision table just for that

  low_low_true_low_low: 0.1, // low playfulness, low loving, extrovert
  low_low_true_low_medium: 0,
  low_low_true_low_max: 0,
  low_low_true_medium_low: 0.2,
  low_low_true_medium_medium: 0.1,
  low_low_true_medium_max: 0,
  low_low_true_max_low: 0.2,
  low_low_true_max_medium: 0.1,
  low_low_true_max_max: 0,

  low_high_true_low_low: 0.1, // low playfulness, high loving, extrovert
  low_high_true_low_medium: 0,
  low_high_true_low_max: 0,
  low_high_true_medium_low: 0.2,
  low_high_true_medium_medium: 0.1,
  low_high_true_medium_max: 0,
  low_high_true_max_low: 0.2,
  low_high_true_max_medium: 0.1,
  low_high_true_max_max: 0,

  high_low_true_low_low: 0.1, // high playfulness, low loving, extrovert
  high_low_true_low_medium: 0,
  high_low_true_low_max: 0,
  high_low_true_medium_low: 0.2,
  high_low_true_medium_medium: 0.1,
  high_low_true_medium_max: 0,
  high_low_true_max_low: 0.2,
  high_low_true_max_medium: 0.1,
  high_low_true_max_max: 0,

  high_high_true_low_low: 0.1, // high playfulness, high loving, extrovert
  high_high_true_low_medium: 0,
  high_high_true_low_max: 0,
  high_high_true_medium_low: 0.2,
  high_high_true_medium_medium: 0.1,
  high_high_true_medium_max: 0,
  high_high_true_max_low: 0.2,
  high_high_true_max_medium: 0.1,
  high_high_true_max_max: 0,

  // Add more keys for combinations with extroverted = false

  low_low_false_low_low: 0, // low playfulness, low loving, introvert
  low_low_false_low_medium: 0,
  low_low_false_low_max: -0.1,
  low_low_false_medium_low: 0,
  low_low_false_medium_medium: 0,
  low_low_false_medium_max: 0,
  low_low_false_max_low: 0,
  low_low_false_max_medium: 0,
  low_low_false_max_max: 0,

  low_high_false_low_low: 0, // low playfulness, high loving, introvert
  low_high_false_low_medium: 0,
  low_high_false_low_max: -0.1,
  low_high_false_medium_low: 0,
  low_high_false_medium_medium: 0,
  low_high_false_medium_max: 0,
  low_high_false_max_low: 0,
  low_high_false_max_medium: 0,
  low_high_false_max_max: 0,

  high_low_false_low_low: 0, // high playfulness, low loving, introvert
  high_low_false_low_medium: 0,
  high_low_false_low_max: 0,
  high_low_false_medium_low: 0,
  high_low_false_medium_medium: 0,
  high_low_false_medium_max: 0,
  high_low_false_max_low: 0,
  high_low_false_max_medium: 0,
  high_low_false_max_max: 0,

  high_high_false_low_low: 0, // high playfulness, high loving, introvert
  high_high_false_low_medium: 0,
  high_high_false_low_max: 0,
  high_high_false_medium_low: 0,
  high_high_false_medium_medium: 0,
  high_high_false_medium_max: 0,
  high_high_false_max_low: 0,
  high_high_false_max_medium: 0,
  high_high_false_max_max: 0,
};

export const petAdjustments: Record<string, number> = {
  // petting can be intrusive/bothersome w/out extrovert and relationshipLove
  // mimic the hold adjustments but tweak strengths of most positive and negative values

  low_low_true_low_low: -0.3, // low playfulness, low loving, extrovert
  low_low_true_low_medium: -0.5,
  low_low_true_low_max: -0.7,
  low_low_true_medium_low: -0.1,
  low_low_true_medium_medium: -0.2,
  low_low_true_medium_max: -0.3,
  low_low_true_max_low: 0.1,
  low_low_true_max_medium: 0,
  low_low_true_max_max: -0.1,

  low_high_true_low_low: 0.1, // low playfulness, high loving, extrovert
  low_high_true_low_medium: 0,
  low_high_true_low_max: -0.1,
  low_high_true_medium_low: 0.3,
  low_high_true_medium_medium: 0.2,
  low_high_true_medium_max: 0.1,
  low_high_true_max_low: 1.0, // highest value because high loving, extrovert, max relationshiplove
  low_high_true_max_medium: 0.5,
  low_high_true_max_max: 0.25,

  high_low_true_low_low: -0.4, // high playfulness, low loving, extrovert
  high_low_true_low_medium: -0.5,
  high_low_true_low_max: -0.6,
  high_low_true_medium_low: -0.2,
  high_low_true_medium_medium: -0.3,
  high_low_true_medium_max: -0.4,
  high_low_true_max_low: 0.1,
  high_low_true_max_medium: 0,
  high_low_true_max_max: -0.1,

  high_high_true_low_low: 0, // high playfulness, high loving, extrovert
  high_high_true_low_medium: -0.1,
  high_high_true_low_max: -0.2,
  high_high_true_medium_low: 0.2,
  high_high_true_medium_medium: 0.1,
  high_high_true_medium_max: 0,
  high_high_true_max_low: 1.5,
  high_high_true_max_medium: 0.75,
  high_high_true_max_max: 0.5,

  low_low_false_low_low: -1, // low playfulness. low loving, introverted
  low_low_false_low_medium: -1.5,
  low_low_false_low_max: -2, // Lowest possible value - low loving, introverted, low relationshiplove
  low_low_false_medium_low: -0.5,
  low_low_false_medium_medium: -0.6,
  low_low_false_medium_max: -0.75,
  low_low_false_max_low: -0.2,
  low_low_false_max_medium: -0.3,
  low_low_false_max_max: -0.4,

  low_high_false_low_low: -0.2, // low playfulness, high loving, introvert
  low_high_false_low_medium: -0.3,
  low_high_false_low_max: -0.4,
  low_high_false_medium_low: 0.2, // if introvert then existing relationshiplove is important, also high loving tendencies
  low_high_false_medium_medium: 0.4,
  low_high_false_medium_max: 0.6,
  low_high_false_max_low: 1.0,
  low_high_false_max_medium: 0.75,
  low_high_false_max_max: 0.5,

  high_low_false_low_low: -1, // high playfulness, low loving, introvert
  high_low_false_low_medium: -1.5,
  high_low_false_low_max: -2,
  high_low_false_medium_low: -0.5,
  high_low_false_medium_medium: -0.6,
  high_low_false_medium_max: -0.75,
  high_low_false_max_low: -0.2,
  high_low_false_max_medium: -0.3,
  high_low_false_max_max: -0.4,

  high_high_false_low_low: -0.2, // high playfulness, high loving, introvert
  high_high_false_low_medium: -0.3,
  high_high_false_low_max: -0.4,
  high_high_false_medium_low: 0.2,
  high_high_false_medium_medium: 0.4,
  high_high_false_medium_max: 0.6,
  high_high_false_max_low: 1.0,
  high_high_false_max_medium: 0.75,
  high_high_false_max_max: 0.5,
};

export const pssPssAdjustments: Record<string, number> = {
  // pss pss similar to ignore, it might be more situational needing specific functions even beyond orderAdjustments
  // pss pss a little bit playful, and not bothersome mostly
  // really we have it here so we can use these returns to trigger cat Reaction responses to either positive or negative
  // most of the interesting effects of pss pss will be from special functions

  low_low_true_low_low: 0.1, // low playfulness, low loving, extrovert
  low_low_true_low_medium: 0,
  low_low_true_low_max: 0,
  low_low_true_medium_low: 0.1,
  low_low_true_medium_medium: 0,
  low_low_true_medium_max: 0,
  low_low_true_max_low: 0.1,
  low_low_true_max_medium: 0,
  low_low_true_max_max: 0,

  low_high_true_low_low: 0.1, // low playfulness, high loving, extrovert
  low_high_true_low_medium: 0,
  low_high_true_low_max: 0,
  low_high_true_medium_low: 0.1, // ignoring high loving extrovert that you have a relationship with is bad probz
  low_high_true_medium_medium: 0,
  low_high_true_medium_max: 0,
  low_high_true_max_low: 0.1,
  low_high_true_max_medium: 0,
  low_high_true_max_max: 0,

  high_low_true_low_low: 0.2, // high playfulness, low loving, extrovert
  high_low_true_low_medium: 0.1,
  high_low_true_low_max: 0,
  high_low_true_medium_low: 0.2,
  high_low_true_medium_medium: 0.1,
  high_low_true_medium_max: 0,
  high_low_true_max_low: 0.2,
  high_low_true_max_medium: 0.1,
  high_low_true_max_max: 0,

  high_high_true_low_low: 0.2, // high playfulness, high loving, extrovert
  high_high_true_low_medium: 0.1,
  high_high_true_low_max: 0,
  high_high_true_medium_low: 0.2,
  high_high_true_medium_medium: 0.1,
  high_high_true_medium_max: 0,
  high_high_true_max_low: 0.1,
  high_high_true_max_medium: 0,
  high_high_true_max_max: 0,

  low_low_false_low_low: 0, // low playfulness, low loving, introvert
  low_low_false_low_medium: 0, // ignoring the introvert can allow them space to be comfortable
  low_low_false_low_max: 0,
  low_low_false_medium_low: 0.1, // once some relationship established ignoring might be negative
  low_low_false_medium_medium: 0,
  low_low_false_medium_max: -0.1,
  low_low_false_max_low: 0.1,
  low_low_false_max_medium: -0.1,
  low_low_false_max_max: -0.2,

  low_high_false_low_low: 0, // low playfulness, high loving, introvert
  low_high_false_low_medium: 0,
  low_high_false_low_max: 0,
  low_high_false_medium_low: 0.1,
  low_high_false_medium_medium: 0,
  low_high_false_medium_max: -0.1,
  low_high_false_max_low: 0.1,
  low_high_false_max_medium: -0.1,
  low_high_false_max_max: -0.2,

  high_low_false_low_low: 0.1, // high playfulness, low loving, introvert
  high_low_false_low_medium: 0,
  high_low_false_low_max: 0,
  high_low_false_medium_low: 0.1,
  high_low_false_medium_medium: 0,
  high_low_false_medium_max: -0.1,
  high_low_false_max_low: 0.1,
  high_low_false_max_medium: 0,
  high_low_false_max_max: -0.1,

  high_high_false_low_low: 0.1, // high playfulness, high loving, introvert
  high_high_false_low_medium: 0,
  high_high_false_low_max: 0,
  high_high_false_medium_low: 0.1,
  high_high_false_medium_medium: 0,
  high_high_false_medium_max: 0,
  high_high_false_max_low: 0.2,
  high_high_false_max_medium: 0,
  high_high_false_max_max: 0,
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
