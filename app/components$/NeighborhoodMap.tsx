import Image from "next/image";
import Map from "../../public/navigatemap.svg";
import { CatMap } from "./CatMap";

export function NeighborhoodMap() {
  return (
    <div className="w-full relative">
      <Image src={Map} alt="Neighborhood Map" className="w-full" />
    </div>
  );
}
