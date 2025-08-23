"use client"
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import google from "../../../../.././public/assets/Google.png"
import Swal from "sweetalert2";


const SocialLogin = () => {

  const session = useSession()
  const router = useRouter()

    const handleSocialLogin = (providerName) => {
        console.log("social login", providerName);
        signIn(providerName, {callbackUrl: "/products",})
        
      }

    useEffect(()=>{
        if(session.status ==="authenticated") {
        router.push('/products')
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged In successfully",
            showConfirmButton: false,
            timer: 1500,
          })
      }
      },[session.status])

  return (
    <div className="flex justify-center items-center gap-4 mb-6">
      <div onClick={() => handleSocialLogin("github")} className="w-[50px] h-[50px] bg-gray-100 rounded-full flex justify-center items-center cursor-pointer">
        <FaGithub size={22} />
      </div>
      <Image
      onClick={() => handleSocialLogin("google")}
      className="w-[50px] h-[50px] cursor-pointer"
        width={50}
        height={50}
        src={google}
        alt="google"
      />
    </div>
  );
};

export default SocialLogin;
