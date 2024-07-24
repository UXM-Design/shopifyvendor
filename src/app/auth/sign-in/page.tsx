"use client";
import React, { useState } from "react";
import Link from "next/link";

type Props = {};

const SignIn = (props: Props) => {
  const [submit, setSubmit] = useState();

  const handelSubmit = () => {
    alert("Login success");
  };

  return (
    <>
      <section className="w-full bg-[#f1f1f1] min-h-screen overflow-hidden flex justify-evenly items-center">
        <div className="md:w-[400px] w-[320px] shadow-xl bg-white rounded-xl flex flex-col justify-center items-center py-4 px-6">
          <div className="content flex flex-col gap-2">
            <span></span>
            <h1 className="text-xl font-medium">Welcome admin</h1>
            <p className="text-[#656565]">
              Please enter your login crediential to access the dashboard
            </p>
          </div>
          <br />
          <form action="/dashboard" method="post" onSubmit={handelSubmit}>
            <div className="w-[360px] py-2 flex flex-col gap-3 ">
              <label htmlFor="email">E mail</label>
              <input
                className="w-[360px] border-2 border-[#989898] rounded-lg px-3 h-[54px]"
                type="email"
                name="email"
                id="email"
                required
                // value={value}
                placeholder="Enter email id"
              />
            </div>
            <div className="w-[360px] py-2 flex flex-col gap-3 ">
              <label htmlFor="password">Password</label>
              <input
                className="w-[360px] border-2 border-[#989898] rounded-lg px-3 h-[54px]"
                type="password"
                name="password"
                id="password"
                required
                // value={value}
                placeholder="Enter Password"
              />
            </div>
            <br />
            <button
              className="w-[360px] h-[48px] rounded-lg bg-indigo-800 text-white gap-3 "
              type="submit"
              //   onSubmit={handelSubmit}
            >
              Login
            </button>
          </form>
          <br />
          <div className="link">
            {/* <Link href={"/"} className="text-sm text-[#878787]">
              Facing issue with login ?{" "}
              <span className="text-indigo-500 font-medium">contact admin</span>
            </Link> */}
            <span className="text-sm text-[#878787]">
              <Link href={"/"}>Version 1</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
