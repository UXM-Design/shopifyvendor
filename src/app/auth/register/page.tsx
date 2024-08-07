'use client'
import React, { useState } from "react";
import * as yup from "yup";
import { vendorRegister } from "@/actions/auth/auth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { redirect } from "next/navigation";
import TextInput from "@/app/_components/ui/TextInput";
import { useRouter } from "next/navigation";

type Props = {};

interface IVendorRegister {
  name: string;
  email: string;
  // mobile: string;
  password: string;
  // confirmpassword: string;
}

const schema = yup
  .object({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
    // mobile: yup.string().required("Mobile is Required"),
    password: yup
      .string()
      .min(6, "Password must be at least 8 characters")
      .max(20, "Password shouldn't be more than 20 characters")
      .required("Please enter password"),
    // confirm password
    /* confirmpassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"), */
  })
  .required();

const Register = (props: Props) => {


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const router = useRouter();


  const onSubmit = async (data: IVendorRegister) => {

    console.log('Cming')
    const response = await vendorRegister(data.name, data.email, data.password);

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
            <h1 className="text-xl font-medium">Welcome</h1>
            <p className="text-[#656565]">
              You can create account by following Details
            </p>
          </div>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              type="text"
              name="name"
              label="Name"
              id="name"
              placeholder="Enter Name"
              register={register}
              error={errors.name}
            />

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
              Register
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

export default Register;
