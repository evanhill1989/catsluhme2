"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface iAppProps {
  imagePath: string;
  catId: string;
  userId: string;
  relationshipId: string;
  pathName: string;
  userGivenName: string;
  catName: string;
}

export function CatInterface({
  imagePath,
  catId,
  userId,
  relationshipId,
  pathName,
  userGivenName,
  catName,
}: iAppProps) {
  return (
    <div>
      <Image
        src={`https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/${imagePath}`}
        alt="Image of the cat"
        width={200}
        height={200}
      />

      {/* // eslint-disable-next-line @next/next/no-img-element */}

      <h1>Hello {userGivenName}</h1>
      <p>User Id: {userId}</p>
      <h3>What would you like to do with {catName}</h3>
      <p>Relationship id: {relationshipId}</p>
      <div>
        <p>today's log</p>
        <p>available treats</p>
      </div>

      <div>
        <Button>Play</Button>
        <Button>Treat</Button>
      </div>
    </div>
  );
}
