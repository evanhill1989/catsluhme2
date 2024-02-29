import Image from "next/image";
import Link from "next/link";
import Abigail_Orange from "../../public/Abigail_Orange2.svg";
import { UserNav } from "./UserNav";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between mx-auto px-5 container lg:px-10 py-5">
        <Link href="/">
          <Image src={Abigail_Orange} alt="Abigail_Orange" className="w-16" />
        </Link>
        <UserNav />
      </div>
    </nav>
  );
}
