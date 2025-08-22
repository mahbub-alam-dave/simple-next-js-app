"use client";
import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, getSession } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import Swal from 'sweetalert2'

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Logging...");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/products",
        redirect: false,
      });
      if (response.ok) {
        // toast.success("Logged In successfully");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged In successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
      //console.log({ email, password });
    } catch (error) {
      console.log(error);
      toast.error("FAILED to Log In");
    }
  };
  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className="">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="input w-full mt-2"
          placeholder="Enter email"
        />
      </div>
      <div>
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="input w-full mt-2"
          placeholder="Enter password (6 characters)"
        />
      </div>
      <button
        type="submit"
        className="bg-red-600 px-6 py-3 rounded-full mt-4 w-full text-white font-medium text-lg"
      >
        Sign Up
      </button>
      <span className="mt-6 text-center">Or Sign Up with</span>
      {/* <div className='flex justify-center items-center gap-4 mb-6'>
                    <Image width={50} height={50} src={'/assets/icons/Facebook.png'} alt='facebook'/>
                    <Image width={50} height={50} src={'/assets/icons/linkedin.png'} alt="linkedin"/>
                    <Image width={50} height={50} src={'/assets/icons/Google.png'} alt="google" />
                </div> */}
      <SocialLogin />
      <span className="text-center">
        Don't have an account?{" "}
        <Link href={"/register"} className="text-red-600">
          register
        </Link>
      </span>
    </form>
  );
};

export default LoginForm;
