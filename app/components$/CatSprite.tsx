import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

interface iAppProps {
  imagePath: string;
  catId: string;
  userId: number;
  x: number;
  y: number;
}

export function CatSprite({ imagePath, catId, x, y, userId }: iAppProps) {
  const isLoggedIn = userId.length > 0;
  const style = {
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
  };

  return (
    <>
      {isLoggedIn ? (
        <Link
          href={`/cat/${catId}`}
          passHref
          style={style}
          className="cursor-pointer"
        >
          <Image
            src={imagePath}
            alt="Image of a Cat"
            width={50}
            height={50}
            className="shadow-[0_20px_15px_rgba(0,0,0,0.25)] rounded-full cursor-pointer lightGlowAnimation"
          />
        </Link>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <div style={style}>
              <Image
                src={imagePath}
                alt="Image of a Cat"
                width={50}
                height={50}
                className="shadow-[0_20px_15px_rgba(0,0,0,0.25)] rounded-full cursor-pointer lightGlowAnimation"
              />
            </div>
          </DialogTrigger>
          <DialogContent>
            <p>Sign in to start meeting the cats!!</p>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

// <Dialog style={style}>
//   <DialogTrigger asChild>
//     <Image
//       src={imagePath}
//       alt="Image of a Cat"
//       width={50}
//       height={50}
//       className="shadow-[0_20px_15px_rgba(0,0,0,0.25)] rounded-full cursor-pointer lightGlowAnimation"
//     />
//   </DialogTrigger>
//   <DialogContent>
//     <p>Sign in to start meeting the cats!!</p>
//   </DialogContent>
// </Dialog>

//   <Link href={`/cat/${catId}`} passHref>
//   <a style={style} className="cursor-pointer">
//     <Image
//       src={imagePath}
//       alt="Image of a Cat"
//       width={50}
//       height={50}
//       className="shadow-[0_20px_15px_rgba(0,0,0,0.25)] rounded-full cursor-pointer lightGlowAnimation"
//     />
//   </a>
// </Link>
