// from CatInterface.tsx
useEffect(() => {
  if (actionHistory.length === 0) {
    setInitialMood(mood);
  } else if (actionHistory.length > 0 && actionHistory.length % 10 === 0) {
    setNewMood(mood); // infinite loop if you pull this out of useEffect
    console.log("initialMood: ", initialMood, "mood: ", newMood);
    console.log("actionHistory: ", actionHistory);
    moodChangeRef.current = newMood - initialMood;
    if (moodChangeRef.current + initialMood > 10) {
    }
    // Change relationship factors in DB every so often (currently 10 actions)
    UpdateRelationship(relationshipId, moodChangeRef.current, catId);
  } else {
    console.log("initialMood: ", initialMood, "mood: ", newMood);
    console.log("actionHistory: ", actionHistory);
    setNewMood(mood); // infinite loop if you pull this out of useEffect

    moodChangeRef.current = newMood - initialMood;
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [actionHistory, actionHistory.length, mood]); // Depend on actionHistory to trigger this effect.

// Passed as a prop to GameActions , but runs here to update actionHistory
const handleInteraction = (interaction: InteractionType) => {
  onInteract(interaction);
  evaluateInteractionImpact(interaction); // Adjust the interaction impact score.

  const actionMessages: Record<InteractionType, string> = {
    pet: `You petted ${catName}.`,
    feed: `You gave ${catName} a treat.`,
    play: `You played with ${catName}.`,
    "pss pss": `You called ${catName} over.`,
    hold: `You held ${catName}.`,
    ignore: `You ignored ${catName}.`,
  };

  const newActionMessage = actionMessages[interaction];
  setActionHistory((prevHistory) => {
    const updatedHistory = [...prevHistory, newActionMessage];
    if (updatedHistory.length % 10 === 0) {
    }
    return updatedHistory;
  });
};

function useEffect(arg0: () => void, arg1: any[]) {
  throw new Error("Function not implemented.");
}

function setInitialMood(mood: any) {
  throw new Error("Function not implemented.");
}

function setNewMood(mood: any) {
  throw new Error("Function not implemented.");
}

function UpdateRelationship(relationshipId: any, current: any, catId: any) {
  throw new Error("Function not implemented.");
}

function onInteract(interaction: InteractionType) {
  throw new Error("Function not implemented.");
}

function evaluateInteractionImpact(interaction: InteractionType) {
  throw new Error("Function not implemented.");
}

function setActionHistory(arg0: (prevHistory: any) => any[]) {
  throw new Error("Function not implemented.");
}
