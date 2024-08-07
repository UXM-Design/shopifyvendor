"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { vendorLogin } from "@/actions/auth/auth";
import TextInput from "@/app/_components/ui/TextInput";


type Props = {};

interface IVendorRegister {
  email: string;
  password: string;

}

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup
      .string()
      .min(6, "Password must be at least 8 characters")
      .max(20, "Password shouldn't be more than 20 characters")
      .required("Please enter password"),
  })
  .required();

const SignIn = (props: Props) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const router = useRouter();

  console.log(errors)

  const onSubmit = async (data: IVendorRegister) => {

    const response = await vendorLogin(data.email, data.password);

    console.log(response)
    if (response.status === 200) {
      router.push("/dashboard");
    }

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
          <form action="/dashboard" method="post" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              type="email"
              name="email"
              label="Email Address"
              id="email"
              placeholder="Enter email id"
              register={register}
              error={errors.email}
            />

            <TextInput
              type="password"
              name="password"
              label="Password"
              id="password"
              placeholder="Enter Password"
              register={register}
              error={errors.password}
            />

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
