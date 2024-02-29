import Image from "next/image";
import Map from "../../public/navigatemap.svg";
import Abigail from "../../public/Abigail_Orange2.svg";
import Luna from "../../public/Luna_Plum2.svg";
import Oscar from "../../public/Oscar_Grey2.svg";

export function NeighborhoodMap() {
  return (
    <div className="w-full relative">
      <Image src={Map} alt="Neighborhood Map" className="w-full" />
      <Image
        src={Abigail}
        alt="Abigail"
        className="absolute top-10 left-4 lg:w-20 w-8 z-10"
      />
      <Image
        src={Luna}
        alt="Luna"
        className="absolute top-40 left-25 lg:w-20 w-8 z-10"
      />
      <Image
        src={Oscar}
        alt="Oscar"
        className="absolute top-10 right-20 lg:w-20 w-8 z-10"
      />
    </div>
  );
}
