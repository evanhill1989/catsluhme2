"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Abigail from "../../public/Abigail_Orange2.svg";
import Luna from "../../public/Luna_Plum2.svg";
import Oscar from "../../public/Oscar_Grey2.svg";

// This needs to provide be overlaying Neighborhood Map component on index page.

export function CatMap() {
  return (
    <div className="w-full relative">
      <Link href="/cat">
        <Image
          src={Abigail}
          alt="Abigail"
          className="absolute top-10 left-4 lg:w-20 w-8 z-10"
        />
      </Link>
      <Link href="/cat">
        <Image
          src={Luna}
          alt="Luna"
          className="absolute top-40 left-25 lg:w-20 w-8 z-10"
        />
      </Link>
      <Link href="/cat">
        {" "}
        <Image
          src={Oscar}
          alt="Oscar"
          className="absolute top-10 right-20 lg:w-20 w-8 z-10"
        />
      </Link>
    </div>
  );
}
