"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useCatMood } from "../hooks/useCatMood";
import { UpdateRelationship } from "@/app/actions";

interface iAppProps {
  imagePath: string;
  catId: string;
  userId: string;
  relationshipId: string;
  pathName: string;
  userGivenName: string;
  catName: string;
  relationshipTrust: number;
  relationshipLove: number;
  duration: number;
  playful: number;
  catLoving: number;
  relationshipAffection: number;
}

// tooltip

let interactionImpactScore = 0; // Initialize outside of your component if it should persist across renders without resetting.

const evaluateInteractionImpact = (interaction: InteractionType) => {
  // Example: positive actions increment the score, negative actions decrement it.
  const impactValues: Record<InteractionType, number> = {
    pet: 1,
    feed: 1,
    play: 1,
    "pss pss": 0, // Assuming calling the cat over is neutral
    hold: -1, // Could be negative if the cat doesn't like to be held
    ignore: -1,
  };

  interactionImpactScore += impactValues[interaction] || 0; // Adjust score based on interaction; fallback to 0 for unlisted interactions.
};

export function CatInterface({
  imagePath,
  catId,
  userId,
  relationshipId,
  pathName,
  userGivenName,
  catName,
  relationshipTrust,
  relationshipLove,
  relationshipAffection,
  catLoving,
  duration,
  playful,
}: iAppProps) {
  // Inline style for the pizza slice effect

  const moodFactors = {
    loving: catLoving,
    playful: playful,
    trust: relationshipTrust,
    affection: relationshipAffection,
  };
  const [mood, { onInteract }] = useCatMood(moodFactors);

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
        updateRelationshipInDB();
      }
      return updatedHistory;
    });
  };

  const updateRelationshipInDB = async () => {
    // Assuming updateRelationship() takes an object with userId, catId, and a score or other metrics to update the relationship
    await UpdateRelationship({
      relationshipId: relationshipId,
      love: relationshipLove,
      trust: relationshipTrust,
      affection: relationshipAffection,
      score: interactionImpactScore,
    });

    // Reset the interactionImpactScore if necessary, or adjust logic as needed
    interactionImpactScore = 0;
  };

  const [actionHistory, setActionHistory] = useState<string[]>([]);

  const loveStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundImage: `conic-gradient(from 0deg at 50% 50%, #0000 0deg, #0000 ${relationshipLove}deg, black ${relationshipLove}deg, black ${
      360 - relationshipLove
    }deg, #0000 ${360 - relationshipLove}deg)`,
  };

  const trustStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundImage: `conic-gradient(from 0deg at 50% 50%, #0000 0deg, #0000 ${relationshipTrust}deg, black ${relationshipTrust}deg, black ${
      360 - relationshipTrust
    }deg, #0000 ${360 - relationshipTrust}deg)`,
  };

  const durationStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundImage: `conic-gradient(from 0deg at 50% 50%, #0000 0deg, #0000 ${duration}deg, black ${duration}deg, black ${
      360 - duration
    }deg, #0000 ${360 - duration}deg)`,
  };

  return (
    <div className=" h-full bg-[url(https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/BackgroundTreesGrass.svg?t=2024-03-13T21%3A40%3A05.276Z)]">
      <div className="gameInterface min-h-full w-full grid grid-cols-12 grid-rows-5 ">
        <div className="gameDisplay grid grid-rows-subgrid min-h-full grid-cols-subgrid col-start-1 col-end-13 row-start-1 row-end-5">
          <div className="currentState col-start-1 col-end-3 row-start-1 row-end-4 flex flex-col">
            <h2>{catName}</h2>

            <div className="mood basis-1/3 flex flex-col  w-full">
              <p>Current mood: {mood}</p>
              <div>
                <p>energy</p>
                <Progress className="energy" value={33} />
              </div>
              <div>
                <p>love</p>
                <Progress className="love" value={33} />
              </div>
              <div>
                <p>hunger</p>
                <Progress className="hunger" value={33} />
              </div>
              <div>
                <p>play</p>
                <Progress className="play" value={33} />
              </div>
            </div>
            <div className="actionLog basis-2/3 flex flex-col overflow-y-auto p-2 bg-slate-400">
              {actionHistory.map((action, index) => (
                <p key={index}>{action}</p>
              ))}
            </div>
          </div>
          <div className="catSprite col-start-5 col-end-9 row-start-1 row-end-5 mt-4 mb-4">
            <Image
              src={`https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/${imagePath}`}
              alt="Image of a Cat"
              width={400}
              height={400}
            />
          </div>
          <div className="relationshipStates col-start-12 col-end-13 row-start-1 row-end-5 border-2 border-black flex flex-col justify-around items-center ">
            <div style={loveStyle} className=" friendship "></div>
            <div style={trustStyle} className=" friendship "></div>
            <div style={durationStyle} className=" friendship "></div>
          </div>
        </div>
        <div className="gameActions  grid grid-rows-subgrid grid-cols-subgrid col-start-4 col-end-10 row-start-5 gap-12">
          <Button
            className=" col-start-1 col-end-2 "
            onClick={() => handleInteraction("play")}
          >
            Play
          </Button>
          <Button
            className=" col-start-2 col-end-3 "
            onClick={() => handleInteraction("feed")}
          >
            Treat
          </Button>
          <Button
            className=" col-start-3 col-end-4 "
            onClick={() => handleInteraction("pet")}
          >
            Pet
          </Button>
          <Button
            className=" col-start-4 col-end-5 "
            onClick={() => handleInteraction("pss pss")}
          >
            Psst Psst
          </Button>
          <Button
            className=" col-start-5 col-end-6 "
            onClick={() => handleInteraction("hold")}
          >
            Hold
          </Button>
          <Button
            className=" col-start-6 col-end-7 "
            onClick={() => handleInteraction("ignore")}
          >
            Ignore
          </Button>
        </div>
      </div>
    </div>
  );
}
