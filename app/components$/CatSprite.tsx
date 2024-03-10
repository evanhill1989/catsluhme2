import Image from "next/image";
import Link from "next/link";

// import { AddToFavoriteButton, DeleteFromFavoriteButton } from "./SubmitButtons";
// import { AddToFavorite, DeleteFromFavorite } from "../actions";

interface iAppProps {
  imagePath: string;
  catId: string;
  pathName: string;
  userId: string;
  relationshipId: string;
  x: number;
  y: number;
}

export function CatSprite({ imagePath, catId, pathName, x, y }: iAppProps) {
  const style = {
    left: `${x}%`,
    top: `${y}%`,
    // Adjust width and height as needed
  };
  return (
    <div style={style} className="absolute">
      <div>
        <Link className="cursor-pointer" href={`/cat/${catId}`}>
          <Image
            src={`${imagePath}`}
            alt="Image of a Cat"
            width={50}
            height={50}
            className="shadow-[0_20px_15px_rgba(0,0,0,0.25)]  rounded-full cursor-pointer lightGlowAnimation "
          />
        </Link>
      </div>
    </div>
  );
}
