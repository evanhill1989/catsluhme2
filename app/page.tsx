import { NeighborhoodMap } from "./components$/NeighborhoodMap";
import { CatMap } from "./components$/CatMap";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import prisma from "./lib/db";
import { CatSprite } from "./components$/CatSprite";
import { Suspense } from "react";
import { SkeletonCard } from "./components$/SkeletonCard";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore } from "next/cache";

// the big scary thing is still how do i get the cat id on the route?

const landmarks = [
  { id: "landmark1", name: "Shop", x: 410, y: 200 },
  { id: "landmark2", name: "Abigail_House", x: 300, y: 400 },
  { id: "landmark3", name: "Oscar_House", x: 500, y: 500 },
  // Add more landmarks as needed
];

async function getData() {
  let data = await prisma.cat.findMany({
    where: {},
    // include: {
    //   landmark: true, // Assuming a relation exists between cats and landmarks
    // },
  });

  // Map data to include landmark coordinates
  // data = data.map((cat) => ({
  //   ...cat,
  //   x: cat.landmark.x,
  //   y: cat.landmark.y,
  // }));

  return data;
}

export default function Home() {
  // landmarks.js or within your Home component file for positioning neighborhood map

  return (
    <div className="relative container mx-auto px-5 lg:px-10">
      <NeighborhoodMap />
      {/* <Suspense></Suspense> */}
      <div className="absolute top-10 z-10 w-full h-full">
        <ShowCats />
      </div>
    </div>
  );
}

async function ShowCats() {
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();
  const data = await getData();

  if (!data) {
    return null;
  }

  return (
    <>
      {data.length === 0 ? (
        <div>
          <h2>No cats</h2>
        </div>
      ) : (
        <div className="place-items-center grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => {
            return (
              <CatSprite
                userId={""}
                relationshipId={""}
                key={item.id}
                catId={item.id}
                imagePath={item.pic as string}
                pathName="/"
                x={item.landmarkX ?? 0} // Pass x coordinate
                y={item.landmarkY ?? 0} // Pass y coordinate
              />
            );
          })}
        </div>
      )}
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
