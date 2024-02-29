import Image from "next/image";
import Map from "../../public/navigatemap.svg";

export function NeighborhoodMap() {
  return (
    <div className="w-full">
      <Image src={Map} alt="Neighborhood Map" className="w-full" />
    </div>
  );
}
