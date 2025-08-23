"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { registerUser } from '@/app/actions/auth/register';
import SocialLogin from './SocialLogin';
import { signIn } from 'next-auth/react';
import Loader from '@/app/generalComponents/Loader';

const RegisterForm = () => {

    const [loading, setLoading] = useState(false)
    const handleRegisterForm = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const form = new FormData(e.target)
        const registerData = Object.fromEntries(form.entries())
        try {
            const res = await registerUser(registerData)
            console.log(res.acknowledged)
            if (res?.acknowledged) {
        // Auto login
const signInResult = await signIn("credentials", {
    email: registerData.email,
    password: registerData.password,
    callbackUrl: "/products",
    redirect: true,
})


        console.log(signInResult)

        if (signInResult?.ok) {
          router.push("/dashboard") // redirect after login
        } else {
          setError("Failed to login after registration")
        }
      } else {
        setError("User already exists or registration failed")
      }
        } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }

        
    }
    return (
                <form onSubmit={handleRegisterForm} className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="name" className=''>Name</label>
                    <input type="text" name='name' className='input w-full mt-2' placeholder='Enter name' />
                </div>
                <div>
                    <label htmlFor="email" className=''>Email</label>
                    <input type="email" name='email' className='input w-full mt-2' placeholder='Enter email' />
                </div>
                <div>
                    <label htmlFor="password" className=''>Password</label>
                    <input type="password" name='password' className='input w-full mt-2' placeholder='Enter password (6 characters)' />
                </div>
                <button type="submit" className='bg-red-600 px-6 py-3 rounded-full mt-4 w-full text-white font-medium text-lg cursor-pointer'>{loading ? <Loader size={20} color="text-white" /> : "Register"}</button>
                <span className='mt-6 text-center'>Or Sign Up with</span>
                <SocialLogin />
                <span className='text-center'>Already have an account? <Link href={'/login'} className='text-red-600'>Login</Link></span>
            </form>
    );
};

export default RegisterForm;