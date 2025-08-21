import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

      const navLinks = () => {
    return (
      <>
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/about'}>About</Link></li>
      <li><Link href={'/services'}>Services</Link></li>
      <li><Link href={'/blog'}>Blog</Link></li>
      <li><Link href={'/my-bookings'}>My Bookings</Link></li>
      </>
    )
  }

    return (
    <div className='h-[80px] bg-base-100 shadow-sm'>
<div className="navbar p-4 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navLinks()}
      </ul>
    </div>
    <Link href={'/'} className="text-2xl">
      {/* <Image src={'/assets/logo.svg'} width={75} height={75} alt='car doctor' className='W-18 h-auto'></Image> */}
      <h2 className='text-2xl font-bold'>SHop Me</h2>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {navLinks()}
    </ul>
  </div>
  <div className="navbar-end flex gap-6">
{/*     <div className='flex gap-4'>
      {
        status === "authenticated" ?
        <button onClick={() => signOut()} className='btn bg-red-600 text-white rounded-lg'>Sign Out</button>
       :
      <Link href={'/login'}><button className='btn rounded-lg'>Sign In</button></Link>
      }
    </div> */}
    <button className="btn btn-outline text-red-600 rounded-lg">Login</button>
  </div>
</div>
</div>
    );
};

export default Navbar;

/* 
https://i.ibb.co.com/Tx01skZk/shopping.jpg
https://i.ibb.co.com/zhPXvy4r/img-1.jpg
https://i.ibb.co.com/tws3s7Fr/img-2.jpg
https://i.ibb.co.com/fzt9hbpC/img-3.jpg
https://i.ibb.co.com/HTWsNfmr/img-4.jpg
https://i.ibb.co.com/8LZ57J55/img-5.png
https://i.ibb.co.com/j9qtc2sr/img-6.png
https://i.ibb.co.com/qLbH6RfL/img-7.png
https://i.ibb.co.com/ynbFgGvx/img-8.png
https://i.ibb.co.com/d46pDr2Z/img-9.png
https://i.ibb.co.com/Vc8HxRJy/img-10.png
https://i.ibb.co.com/wrb7VNMz/img-11.png
https://i.ibb.co.com/C58Xs94Z/img-12.png */