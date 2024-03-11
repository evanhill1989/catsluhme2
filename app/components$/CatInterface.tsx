"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface iAppProps {
  imagePath: string;
  catId: string;
  userId: string;
  relationshipId: string;
  pathName: string;
  userGivenName: string;
  catName: string;
  trust: number;
  love: number;
  duration: number;
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
  trust,
  love,
  duration,
}: iAppProps) {
  // Inline style for the pizza slice effect
  const loveStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundImage: `conic-gradient(from 0deg at 50% 50%, #0000 0deg, #0000 ${love}deg, black ${love}deg, black ${
      360 - love
    }deg, #0000 ${360 - love}deg)`,
  };

  const trustStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundImage: `conic-gradient(from 0deg at 50% 50%, #0000 0deg, #0000 ${trust}deg, black ${trust}deg, black ${
      360 - trust
    }deg, #0000 ${360 - trust}deg)`,
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
    <div className="mx-2 h-full">
      <div className="gameInterface min-h-full w-full grid grid-cols-12 grid-rows-5 ">
        <div className="gameDisplay grid grid-rows-subgrid min-h-full grid-cols-subgrid col-start-1 col-end-13 row-start-1 row-end-5">
          <div className="currentState col-start-1 col-end-3 row-start-1 row-end-4 flex flex-col">
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
            <div className="actionLog basis-2/3 flex bg-slate-400"></div>
          </div>
          <div className="catSprite col-start-5 col-end-9 row-start-1 row-end-5 bg-slate-300 mt-4 mb-4"></div>
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
