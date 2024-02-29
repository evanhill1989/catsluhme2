import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-3 rounded-full border px-2 py-2 lg:px-4 lg:py-2 ">
          <MenuIcon className="h-6 w-6 lg:w-5 lg:h-5" />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            className="rounded-full w-8 h-8 hidden lg:block lg:w-10 lg:h-10"
            alt="User Image"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem>Register</DropdownMenuItem>
        <DropdownMenuItem>Login</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
