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
}

export function ListingCard({ imagePath, catId, pathName }: iAppProps) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-72">
        <Link href={`/cat/${catId}`}>
          <Image
            src={`${imagePath}`}
            alt="Image of a Cat"
            fill
            className="object-cover rounded-lg h-full"
          />
        </Link>
      </div>
    </div>
  );
}

{
  /* {userId && (
          <div className="absolute top-2 right-2 z-10">
            {isInFavoriteList ? (
              <form action={DeleteFromFavorite}>
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavoriteButton />
              </form>
            ) : (
              <form action={AddToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavoriteButton />
              </form>
            )}
          </div>
        )}
      </div>

      <Link href={`/home/${homeId}`} className="mt-2">
        <h3 className="font-medium text-base"></h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <p className="text-muted-foreground pt-2">
          {" "}
          <span className="font-medium text-black">${price}</span> Night
        </p>
      </Link> */
}
