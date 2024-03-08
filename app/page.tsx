import { NeighborhoodMap } from "./components$/NeighborhoodMap";
import { CatMap } from "./components$/CatMap";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import prisma from "./lib/db";
import { ListingCard } from "./components$/ListingCard";
import { Suspense } from "react";
import { SkeletonCard } from "./components$/SkeletonCard";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore } from "next/cache";

// the big scary thing is still how do i get the cat id on the route?

async function getData() {
  //{
  //   searchParams,
  //   // userId,
  // }: {
  //   // userId: string | undefined;
  //   searchParams?: {
  //     pic?: string;
  //     id?: string;
  //   };
  // }) {
  //noStore();
  const data = await prisma.cat.findMany({
    where: {
      // addedCategory: true,
      // addedDescription: true,
      // addedLocation: true,
      // categoryName: searchParams?.filter ?? undefined,
      // country: searchParams?.country ?? undefined,
      // guests: searchParams?.guest ?? undefined,
      // bedrooms: searchParams?.room ?? undefined,
      // bathrooms: searchParams?.bathroom ?? undefined,
    },
    // select: {
    //   photo: true,
    //   id: true,
    //   price: true,
    //   description: true,
    //   country: true,
    //   Favorite: {
    //     where: {
    //       userId: userId ?? undefined,
    //     },
    //   },
    // },
  });

  return data;
}

export default function Home() {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <NeighborhoodMap />
      <Suspense fallback={<SkeletonLoading />}>
        <ShowCats />
      </Suspense>
    </div>
  );
}

async function ShowCats() {
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();
  const data = await getData();
  return (
    <>
      {data.length === 0 ? (
        <div>
          <h2>No cats</h2>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => {
            return (
              <ListingCard
                key={item.id}
                catId={item.id}
                imagePath={item.pic as string}
                pathName="/"
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
