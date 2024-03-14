"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useCatMood } from "../hooks/useCatMood";

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

  const initialFactors = {
    loving: catLoving,
    playful: playful,
    trust: relationshipTrust,
    affection: relationshipAffection,
  };
  const [mood, { onInteract }] = useCatMood(initialFactors);

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
            <div className="actionLog basis-2/3 flex bg-slate-400">
              <p>Current mood: {mood}</p>
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
          <Button className=" col-start-1 col-end-2 ">Play</Button>
          <Button className=" col-start-2 col-end-3 ">Treat</Button>
          <Button className=" col-start-3 col-end-4 ">Pet</Button>
          <Button className=" col-start-4 col-end-5 ">Psst Psst</Button>
          <Button className=" col-start-5 col-end-6 ">Hold</Button>
          <Button className=" col-start-6 col-end-7 ">Ignore</Button>
        </div>
      </div>
    </div>
  );
}
