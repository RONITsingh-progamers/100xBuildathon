"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    // Main Div
    <div className="relative z-50 container tracking-wide top-0 mx-auto flex items-center px-6 py-8 h-auto">
      <Link href="/">
        <Image
          src="/logo_png_white_text.png"
          width={200}
          height={250}
          alt="logo"
          className="w-[150px] md:w-[200px]"
        ></Image>
      </Link>
      <div className="grow"></div>
      <div className="md:space-x-8">
        <Link
          href="login"
          className="px-6 py-3 bg-transparent border-2 border-gradient-to-r from-blue-400 to-ourgreen text-white rounded-full text-sm md:text-base lg:text-lg font-bold relative md:overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-ourgreen opacity-20 rounded-full hover:animate-pulse"></span>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
