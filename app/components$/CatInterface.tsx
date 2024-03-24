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
    trustR: relationshipTrust,
    affectionR: relationshipAffection,
    loveR: relationshipLove,
  };

  const playPositiveReactions = [
    "Pounces on your laser light.",
    "Snatches your feather toy out of the air.",
    "Swipes at your rolling ball.",
    "Kicks your fabric mouse toy with hind legs.",
    "Chases your dragged string.",
    "Plays energetically with your jingling ball.",
    "Runs through the tunnel chasing your wand toy.",
    "Catches your fluttering butterfly toy.",
    "Carries your soft toy around proudly.",
    "Stops your toy on wheels with a firm paw.",
  ];

  const playNegativeReactions = [
    "Ignores your laser light.",
    "Looks at your feather toy but doesn't engage.",
    "Watches your ball roll by, uninterested.",
    "Sniffs your fabric mouse toy and walks away.",
    "Ignores your string completely.",
    "Glances at your jingling ball and yawns.",
    "Stares at the entrance of your play tunnel but doesn't enter.",
    "Watches your butterfly toy without moving.",
    "Sees your soft toy but shows no interest.",
    "Observes your toy on wheels pass by without a reaction.",
  ];

  // One thing I'm not seeing is how we get updated moodFactors back

  const [mood, { onInteract }] = useCatMood(
    moodFactors,
    initialFactors,
    actionHistory,
    catName
  );
  const [initialMood, setInitialMood] = useState<number>(mood);
  const [catReaction, setCatReaction] = useState(null);
  const [actionMessage, setActionMessage] = useState("");

  // So can't we just use mood?

  let moodChangeRef = useRef<number>(0);
  console.log("!!!!!!!!!!!!actionHistory in CatInterface: ", actionHistory);

  useEffect(() => {
    if (actionHistory.length === 0) {
      setInitialMood(mood);
      setCatReaction(null);
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
    onInteract(interaction); // sends interaction to useCatMood "pet" "feed" "play" etc

    const actionMessages: Record<InteractionType, string> = {
      pet: `You petted ${catName}`,
      feed: `You gave ${catName} a treat`,
      play: `Attempting to play with ${catName}`,
      "pss pss": `You called ${catName} over`,
      hold: `You held ${catName}`,
      ignore: `You ignored ${catName}`,
    };

    const newActionMessage = actionMessages[interaction];
    setActionHistory((prevHistory) => {
      const updatedHistory = [...prevHistory, newActionMessage];
      return updatedHistory;
    });

    // let periodCount = 1;
    // const intervalId = setInterval(() => {
    //   periodCount = periodCount >= 3 ? 1 : periodCount + 1; // Reset or increment period count
    //   setActionMessage(`${newActionMessage}${".".repeat(periodCount)}`); // Update action message with dynamic periods
    // }, 500); // Adjust as needed for fluid movement

    // setTimeout(() => {
    //   clearInterval(intervalId); // Stop the interval when setting the cat's reaction
    //   if (moodChangeRef.current < 0) {
    //     setCatReaction(
    //       playNegativeReactions[
    //         Math.floor(Math.random() * playNegativeReactions.length)
    //       ]
    //     );
    //   } else {
    //     setCatReaction(
    //       playPositiveReactions[
    //         Math.floor(Math.random() * playPositiveReactions.length)
    //       ]
    //     );
    //   }
    //   //setActionMessage(""); // Clear or reset the action message as needed
    // }, 5000); // Assuming this is your desired timeout duration
    // console.log("@@@@actionHistory after setTimeout in CI ", actionHistory);
  };

  console.log(
    "mood in CI: ",
    mood,
    "moodChangeRef.current: ",
    moodChangeRef.current
  );

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
    <div className=" gameInterface h-[90vh] p-4 w-full grid grid-cols-3 grid-rows-[auto 1fr] bg-[url(https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/BackgroundTreesGrass.svg?t=2024-03-13T21%3A40%3A05.276Z)] bg-no-repeat bg-cover bg-bottom">
      <Card className="currentState  flex flex-col  col-start-1 col-end-2 row-start-1  justify-self-start">
        <CardHeader>
          <CardTitle>{catName}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>

        <CardContent className="text-sm">
          <p>Mood</p>
          <Progress className="mood" value={mood * 10} />

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

          <div
            ref={actionHistoryRef}
            className="actionLog h-16 max-h-16 flex flex-col overflow-y-auto p-2 bg-slate-400 "
          >
            {actionMessage}
          </div>
          <div>{catReaction ? <p>{catReaction}</p> : null}</div>
        </CardContent>
      </Card>

      <Card className="relationshipStates self-start justify-self-end flex flex-col justify-around items-center col-start-3 col-end-4 row-start-1">
        <div className=" love ">love</div>
        <div className=" trustR ">trust</div>
        <div className=" friendship ">duration</div>
      </Card>
      <div className=" gameActions  place-self-center col-start-2 col-end-3 row-start-2">
        <Image
          src={`https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/Oscar_Interface.svg`}
          alt="Image of a Cat"
          width={200}
          height={200}
        />
        <GameActions handleInteraction={handleInteraction} />
      </div>
    </div>
  );
}
