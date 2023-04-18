import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 fixed bg-white shadow-lg ">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto  ">
        <div className="sm:ml-10 ss:ml-10 opacity-[50px]">LOGO</div>

        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="border-none bg-transparent text-black mr-4">
            Login
          </button>
          <button className="px-10 py-3">Sing Up</button>
        </div>

        <div className="md:hidden ">
          <GiHamburgerMenu className="text-2xl " />
        </div>

        <ul className="absolute bg-white w-full px-8 shadow-lg md:hidden ">
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Platform</li>
          <li>Pricing</li>
          <div className="flex flex-col my-4 gap-2">
            <button className=" bg-transparent text-black py-3 ">Login</button>
            <button className="px-10 py-3">Sing Up</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
