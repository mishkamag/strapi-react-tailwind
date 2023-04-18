import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full h-[80px] z-10  bg-white shadow-lg relative ">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto  ">
        <div className="sm:ml-10 ss:ml-10 opacity-[50px]">LOGOOO</div>

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

        <div
          className="md:hidden "
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {!menu ? (
            <GiHamburgerMenu className="text-2xl " />
          ) : (
            <AiOutlineClose className="text-2xl " />
          )}
        </div>
      </div>

      <ul
        className={
          menu
            ? "absolute bg-white w-full px-8 shadow-lg md:hidden flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <li>Platform</li>
        <li>Pricing</li>
        <div className="flex flex-col my-4 gap-2 w-full">
          <button className=" bg-transparent text-black py-3 ">Login</button>
          <button className="px-10 py-3">Sing Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
