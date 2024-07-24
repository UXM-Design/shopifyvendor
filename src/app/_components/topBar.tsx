import React from "react";
import Link from "next/link";
import { RiNotificationFill } from "react-icons/ri";

import { WiStars } from "react-icons/wi";

const TopBar = () => {
  return (
    <>
      <nav className="flex w-full rounded-md bg-white justify-between px-4 items-center py-3">
        <div className="flex">
          <h1 className="text-lg font-medium">{"Dashboard"}</h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Link
            href={"/"}
            className="flex gap-3 px-4 py-2 rounded-md bg-gradient-to-br from-blue-500 to-purple-500 text-white justify-center items-center"
          >
            <WiStars className="text-[32px]" />
            <span>Upgrade Plan</span>
          </Link>
          <br />
          <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-50">
            <RiNotificationFill className="text-xl" />
          </div>
          <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-yellow-100 ">
            {/* <RiNotificationFill className="text-xl" /> */}
            <span className="text-[18px] font-semibold text-black">AN</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
