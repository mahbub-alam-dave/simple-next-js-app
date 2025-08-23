"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter, getSession } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import Swal from 'sweetalert2'
import Loader from "@/app/generalComponents/Loader";

const LoginForm = () => {
  const router = useRouter();
  const { update } = useSession();
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Logging...");
    setLoading(true)
    try {
      const response = await signIn("credentials", {
        email,
        password,
        // callbackUrl: "/products",
        redirect: true,
      });
if (response.ok) {
  await update();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Logged In successfully",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    router.push("/products");
    form.reset();
  });
} else {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Invalid credentials",
  });
}
      //console.log({ email, password });
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
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
        className="bg-red-600 px-6 py-3 cursor-pointer rounded-full mt-4 w-full text-white font-medium text-lg"
      >
        {loading ? <Loader size={20} color="text-white" /> : "Login"}
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
