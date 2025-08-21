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
    <div className='bg-base-100 shadow-sm'>
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
      <Image src={'/assets/logo.svg'} width={75} height={75} alt='car doctor' className='W-18 h-auto'></Image>
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