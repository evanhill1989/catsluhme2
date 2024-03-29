"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useCatMood } from "../hooks/useCatMood";
import { UpdateRelationship } from "@/app/actions";
import { SlEnergy, SlHeart } from "react-icons/sl";
import { GiOpenedFoodCan, GiYarn } from "react-icons/gi";
import { ActionSelector } from "./ActionSelector";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  initialAntisocialBehaviors,
  initialFriendlyBehaviors,
  initialPlayfulBehaviors,
  playNegativeReactions,
  playPositiveReactions,
  petNegativeReactions,
  petPositiveReactions,
  feedNegativeReactions,
  feedPositiveReactions,
  holdNegativeReactions,
  holdPositiveReactions,
  ignoreNegativeReactions,
  ignorePositiveReactions,
  pssPssNegativeReactions,
  pssPssPositiveReactions,
} from "../lib/reactions";

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
  extrovert: boolean;
}

type InteractionType = "pet" | "feed" | "play" | "hold" | "ignore" | "pss pss";
// tooltip

let interactionImpactScore = 0; // Initialize outside of your component if it should persist across renders without resetting.

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
  extrovert,
}: iAppProps) {
  // Inline style for the pizza slice effect

  const moodFactors = {
    loving: catLoving,
    playful: playful,
    trustR: relationshipTrust,
    affectionR: relationshipAffection,
    //loveR : relationshipLove do we want this as a factor?
  };
  // Here is the useEffect hook that listens for changes in actionHistory
  const [actionHistory, setActionHistory] = useState<InteractionType[]>([]);

  const initialFactors = {
    loving: catLoving,
    playful: playful,
    extrovert: extrovert,
    trustR: relationshipTrust,
    affectionR: relationshipAffection,
    loveR: relationshipLove,
  };

  // One thing I'm not seeing is how we get updated moodFactors back

  const [mood, finalAdjustmentFactor, { onInteract }] = useCatMood(
    moodFactors,
    initialFactors
  );
  const [initialMood, setInitialMood] = useState<number>(mood);
  const [catReaction, setCatReaction] = useState(null);
  const [actionMessage, setActionMessage] = useState("");

  function getInitialReaction(mood, initialFactors) {
    if (mood > 1) {
      if (
        initialFactors.playful > 4 &&
        initialFactors.playful > initialFactors.loving
      ) {
        initialPlayfulBehaviors[
          Math.floor(Math.random() * initialPlayfulBehaviors.length)
        ];
      } else if (initialFactors.playful < 4 && initialFactors.loving > 4) {
        initialFriendlyBehaviors[
          Math.floor(Math.random() * initialFriendlyBehaviors.length)
        ];
      } else {
        return "This is actually working!";
        // initialFriendlyBehaviors[
        //   Math.floor(Math.random() * initialFriendlyBehaviors.length)
        // ]
      }
    } else {
      // @@@@@******
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   well we've got it working so just this returns now
      // 77777777777777777777777777777(((((0-0---1053070^^^^^^^^^^^^)))))
      // %%%%%%%%%%%%%%%%%%%%%%%%%  WE LEFT OFF HERE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      return initialAntisocialBehaviors[
        Math.floor(Math.random() * initialAntisocialBehaviors.length)
      ];
    }
  }

  useEffect(() => {
    // This will now only run client-side, after mounting
    const initialReaction = getInitialReaction(mood, initialFactors);
    setCatReaction(initialReaction);
  }, []); // Empty dependency array ensures it runs once on mount

  // So can't we just use mood?

  let moodChangeRef = useRef<number>(0);

  useEffect(() => {
    if (actionHistory.length === 0) {
      setInitialMood(mood);
      console.log("@@@!!#! DOes this run on mount?");
      // setCatReaction(null);
    } else if (actionHistory.length > 0 && actionHistory.length % 10 === 0) {
      moodChangeRef.current = mood - initialMood;

      // Update relationship factors in DB every so often (currently every 10 actions)
      UpdateRelationship(
        relationshipId,
        moodChangeRef.current,
        catId,
        initialFactors
      );
    } else {
      moodChangeRef.current = mood - initialMood;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionHistory, actionHistory.length, mood]); // Depend on actionHistory to trigger this effect.

  // Passed as a prop to GameActions , but runs here to update actionHistory
  const handleInteraction = (interaction: InteractionType) => {
    setCatReaction(null);
    onInteract(interaction); // sends interaction to useCatMood "pet" "feed" "play" etc returns newMood state and finalAdjustmentFactor

    const actionMessages: Record<InteractionType, string> = {
      pet: `Attempting to pet ${catName}`,
      feed: ` Attempting to feed ${catName}`,
      play: `Attempting to play with ${catName}`,
      "pss pss": `Attempting to beckon ${catName}`,
      hold: `Attempting to hold ${catName}`,
      ignore: `Ignoring ${catName}`,
    };

    const newActionMessage = actionMessages[interaction];
    setActionHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, newActionMessage];
      return updatedHistory;
    });

    let periodCount = 1;
    const intervalId = setInterval(() => {
      periodCount = periodCount >= 3 ? 1 : periodCount + 1; // Reset or increment period count
      setActionMessage(`${newActionMessage}${".".repeat(periodCount)}`); // Update action message with dynamic periods
    }, 500); // Adjust as needed for fluid movement

    setTimeout(() => {
      clearInterval(intervalId); // Stop the interval when setting the cat's reaction

      if (finalAdjustmentFactor < 0) {
        switch (interaction) {
          case "pet":
            setCatReaction(
              petNegativeReactions[
                Math.floor(Math.random() * petNegativeReactions.length)
              ]
            );
            break;
          case "feed":
            setCatReaction(
              feedNegativeReactions[
                Math.floor(Math.random() * feedNegativeReactions.length)
              ]
            );
            break;
          case "hold":
            setCatReaction(
              holdNegativeReactions[
                Math.floor(Math.random() * holdNegativeReactions.length)
              ]
            );
            break;
          case "pss pss":
            setCatReaction(
              pssPssNegativeReactions[
                Math.floor(Math.random() * pssPssNegativeReactions.length)
              ]
            );
            break;
          case "ignore":
            setCatReaction(
              ignoreNegativeReactions[
                Math.floor(Math.random() * ignoreNegativeReactions.length)
              ]
            );
          case "play":
            setCatReaction(
              playNegativeReactions[
                Math.floor(Math.random() * playNegativeReactions.length)
              ]
            );
            break;
            break;
          default:
            return null;
        }
      } else {
        switch (interaction) {
          case "pet":
            setCatReaction(
              petPositiveReactions[
                Math.floor(Math.random() * petPositiveReactions.length)
              ]
            );
            break;
          case "feed":
            setCatReaction(
              feedPositiveReactions[
                Math.floor(Math.random() * feedPositiveReactions.length)
              ]
            );
            break;
          case "play":
            setCatReaction(
              playPositiveReactions[
                Math.floor(Math.random() * playPositiveReactions.length)
              ]
            );
            break;
          case "hold":
            setCatReaction(
              holdPositiveReactions[
                Math.floor(Math.random() * holdPositiveReactions.length)
              ]
            );
            break;
          case "pss pss":
            setCatReaction(
              pssPssPositiveReactions[
                Math.floor(Math.random() * pssPssPositiveReactions.length)
              ]
            );
            break;
          case "ignore":
            setCatReaction(
              ignorePositiveReactions[
                Math.floor(Math.random() * ignorePositiveReactions.length)
              ]
            );
            break;
          default:
            return null;
        }
      }
      setActionMessage(""); // Clear or reset the action message as needed
    }, 5000); // Assuming this is your desired timeout duration
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

  // console.log("actionHistory.length: ", actionHistory.length);
  return (
    <div className=" gameInterface h-[90vh] p-4 w-full grid grid-cols-3 grid-rows-[auto 1fr] bg-[url(https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/BackgroundTreesGrass.svg?t=2024-03-13T21%3A40%3A05.276Z)] bg-no-repeat bg-cover bg-bottom">
      <Card className="currentState  flex flex-col  col-start-1 col-end-2 row-start-1  justify-self-start">
        <CardHeader>
          <CardTitle>{catName}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>

        <CardContent className="text-sm">
          <p>Mood</p>
          <Progress className="mood" value={mood * 10} />
          <h2>{mood}</h2>
          <div className="flex">
            <SlEnergy />
            <Progress className="energy" value={33} />
          </div>
          <div className="flex">
            <SlHeart />
            <Progress className="love" value={33} />
          </div>
          <div className="flex">
            <GiOpenedFoodCan />
            <Progress className="hunger" value={33} />
          </div>
          <div className="flex">
            <GiYarn />
            <Progress className="play" value={33} />
          </div>
        </CardContent>
      </Card>
      <Card className="actionLog col-start-2 col-end-3 row-start-1 row-end-2">
        {actionHistory.length === 0 && (
          <>
            <div className="actionLog h-16 max-h-16 flex flex-col overflow-y-auto p-2 bg-slate-400 "></div>
            <div>{catReaction}</div>
          </>
        )}
        {actionHistory.length > 0 && (
          <>
            <div
              ref={actionHistoryRef}
              className="actionLog h-16 max-h-16 flex flex-col overflow-y-auto p-2 bg-slate-400 "
            >
              {actionMessage}
            </div>
            <div>{catReaction ? <p>{catReaction}</p> : null}</div>
          </>
        )}
      </Card>

      <div className=" gameActions  place-self-center col-start-2 col-end-3 row-start-2">
        <Image
          src={`https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/Oscar_Interface.svg`}
          alt="Image of a Cat"
          width={200}
          height={200}
        />
        <ActionSelector handleInteraction={handleInteraction} />
      </div>
      <Card className="relationshipStates self-start justify-self-end flex flex-col justify-around items-center col-start-3 col-end-4 row-start-1">
        <div className=" love ">love</div>
        <div className=" trustR ">trust</div>
        <div className=" friendship ">duration</div>
      </Card>
    </div>
  );
}
