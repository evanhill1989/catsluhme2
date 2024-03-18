"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useCatMood } from "../hooks/useCatMood";
import { UpdateRelationship } from "@/app/actions";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { GameActions } from "./GameActions";
import { useScrollToBottom } from "../hooks/useAutoScrollToBottom";

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

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  // Here is the useEffect hook that listens for changes in actionHistory
  const [actionHistory, setActionHistory] = useState<string[]>([]);
  const [initialMood, setInitialMood] = useState<number>(mood);
  const [newMood, setNewMood] = useState<number>(mood);

  let moodChangeRef = useRef<number>(initialMood);

  useEffect(() => {
    // Check if the actionHistory length is a multiple of 10 and greater than 0
    if (actionHistory.length === 0) {
      setInitialMood(mood);
    } else if (actionHistory.length > 0 && actionHistory.length % 10 === 0) {
      setNewMood(mood); // infinite loop if you pull this out of useEffect
      console.log("initialMood: ", initialMood, "mood: ", newMood);
      moodChangeRef.current = newMood - initialMood;

      UpdateRelationship(relationshipId, moodChangeRef.current, catId);
    } else {
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

  const relationshipToDegrees = (relationshipFactor: number) => {
    return (relationshipFactor * 360) / 100;
  };

  function useAutoScrollToBottom(dependencyArray) {
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        // Scroll to the bottom
        container.scrollTop = container.scrollHeight;
      }
    }, [dependencyArray]); // Dependency array ensures effect runs on change

    return containerRef;
  }

  const actionHistoryRef = useAutoScrollToBottom(actionHistory);
  return (
    <div className=" gameInterface  w-full grid grid-cols-12 grid-rows-7  bg-[url(https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/BackgroundTreesGrass.svg?t=2024-03-13T21%3A40%3A05.276Z)] bg-no-repeat bg-cover bg-bottom">
      <Card className="currentState col-start-1 col-end-3 row-start-1 flex flex-col">
        <CardHeader>
          <CardTitle>{catName}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>

        <CardContent>
          <div className="mood basis-1/3 flex flex-col text-sm w-full">
            <p className="text-sm">Mood</p>
            <Progress className="mood" value={mood * 10} />

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
          <div
            ref={actionHistoryRef}
            className="actionLog basis-2/3 flex flex-col overflow-y-auto p-2 bg-slate-400 max-h-32"
          >
            {actionHistory.map((action, index) => (
              <p key={index}>{action}</p>
            ))}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <Card className="relationshipStates col-start-12 col-end-13  flex flex-col justify-around items-center ">
        <div className=" love ">love</div>
        <div className=" trust ">trust</div>
        <div className=" friendship ">duration</div>
      </Card>
      <div className=" gameActions col-start-5 col-end-8  place-self-center">
        <Image
          src={`https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/${imagePath}`}
          alt="Image of a Cat"
          width={200}
          height={200}
        />
        <GameActions handleInteraction={handleInteraction} />
      </div>
    </div>
  );
}
