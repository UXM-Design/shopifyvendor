"use client";
import React from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderMenu = () => {
  const router = useRouter();

  const handelViewOrder = () => {
    alert("No order yet");
  };

  const handelNewOrder = () => {
    alert("current this feature anavilable");
  };

  return (
    <>
      <section className="flex w-full rounded-md bg-white justify-between px-4 items-center py-2">
        <div className="flex">
          <h1 className="text-lg font-medium">{"Orders"}</h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={handelNewOrder}
            className="w-[180px] h-[42px] rounded-md bg-gray-200 text-black"
          >
            Create New Order
          </button>
          <button
            onClick={handelViewOrder}
            className="w-[120px] h-[42px] rounded-md bg-indigo-600 text-white"
          >
            show more
          </button>
        </div>
      </section>
    </>
  );
};

export default HeaderMenu;
