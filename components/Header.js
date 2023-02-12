import MenuItem from "./MenuItem";
import { HomeIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <div className=" flex justify-between mx-2 items-center max-w-6xl sm:mx-auto py-6">
      <div className=" flex space-x-2">
        <MenuItem title="HOME" address="/" Icon={HomeIcon} />
        <MenuItem title="ABOUT" address="/about" Icon={InformationCircleIcon} />
      </div>
      <div className=" flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href={"/"}>
          <h2 className=" text-2xl">
            <span className=" font-bold bg-amber-500 py-2 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className=" text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
