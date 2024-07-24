import React from "react";
import {
  MdOutlineDashboardCustomize, //dashboard
  MdManageSearch, // search
  MdOutlineAccountCircle, // accounts
  MdAttachMoney, // payments & billing
  MdOutlineLogout, // logout
  MdOutlineKeyboardDoubleArrowLeft, // close icon
} from "react-icons/md";

// import { FaBoxesStacked } from "react-icons/fa6"; //orders
import { RiCaravanLine } from "react-icons/ri"; //orders
import { BsBoxSeam } from "react-icons/bs"; // products
import { LuUsers } from "react-icons/lu"; // users

import Link from "next/link";

const SideBar = () => {
  const items = [
    {
      id: 1,
      label: "Dashboard",
      icon: <MdOutlineDashboardCustomize />,
      linkTo: "/dashboard",
    },
    { id: 2, label: "Products", icon: <BsBoxSeam />, linkTo: "/products" },
    { id: 3, label: "Orders", icon: <RiCaravanLine />, linkTo: "/orders" },
    { id: 4, label: "Users", icon: <LuUsers />, linkTo: "/users" },
    { id: 5, label: "Billing", icon: <MdAttachMoney />, linkTo: "/billing" },
  ];

  return (
    <>
      <div className="w-[220px] h-screen flex flex-col gap-3 justify-between py-2 items-center px-3  overflow-hidden bg-white">
        <div className="logo w-full py-4 border-b-2 border-[#e4e4e4]">
          <div className="mt-3 w-full flex gap-3 justify-between items-center py-3 px-3 rounded-sm ">
            <Link href={"/auth/sign-in"} className="text-left">
              Logo
            </Link>
            {/* close arrow */}
            <MdOutlineKeyboardDoubleArrowLeft className="cursor-pointer opacity-0" />
          </div>
        </div>
        <div className="menu w-full flex flex-col px-2 justify-center items-center gap-6 py-4 ">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full flex gap-3 justify-start items-center py-3 px-3 rounded-sm hover:bg-gray-200"
            >
              <span>{item.icon}</span>
              <Link href={item.linkTo}>{item.label}</Link>
            </div>
          ))}
        </div>
        <div className="logo w-full py-4 border-t-2 border-[#e4e4e4]">
          <div className="w-full flex gap-3 justify-start items-center py-3 px-3 rounded-sm bg-yellow-100 text-white">
            <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-yellow-100 ">
              {/* <RiNotificationFill className="text-xl" /> */}
              <span className="text-[18px] font-semibold text-black tracking-wider">
                AN
              </span>
            </div>
            <div className="flex flex-col">
              <Link href={"/"} className="text-black text-sm ">
                James Wells
              </Link>
              <span className="text-black text-[0.6rem] font-semibold ">
                76768878UIUAH
              </span>
            </div>
          </div>
          <div className="mt-3 w-full flex gap-3 justify-between items-center py-3 px-3 rounded-sm hover:bg-red-100 hover:text-red-600">
            <Link href={"/auth/sign-in"} className="text-left">
              Log Out
            </Link>
            <MdOutlineLogout />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
