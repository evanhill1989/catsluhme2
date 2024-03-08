import React from "react";
import Image from "next/image";

interface iAppProps {
  imagePath: string;
  catId: string;
  userId: string;
  relationshipId: string;
  pathName: string;
}

export function CatInterface({
  imagePath,
  catId,
  userId,
  relationshipId,
  pathName,
}: iAppProps) {
  return (
    <div>
      <Image
        src={`https://mvqxbokxwtxywgeiuqap.supabase.co/storage/v1/object/public/cats/${imagePath}`}
        alt="Image of the cat"
        className="object-cover rounded-lg h-full"
        fill
      />
      <h2>CatId: {catId}</h2>
      <h2>UserId: {userId}</h2>
      <h2>relationshipId: {relationshipId}</h2>
    </div>
  );
}
