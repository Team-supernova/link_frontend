import React from "react";
import { NavLink } from "react-router-dom";
import naveLinkDatas from "./navData";

export default function Navbar() {
  return (
    <nav
      className={`transition-all duration-300 text-black  lg:px-[30px] px-4 fixed z-[99] top-0 w-full grid grid-cols-[150px_1fr] items-center justify-between md:py-10 shadow-md`}
    >
      {/* logo */}
      <NavLink to={"/"}>Logo</NavLink>
      <div className="hidden md:flex justify-center items-center space-x-10 justify-self-end">
        {naveLinkDatas.map((navLink, index) => (
          <NavLink
            to={navLink.to}
            className={`w-fit text-[18px] border-b border-white ${ navLink.name !== "Join as a Provider" && "hover:border-b-black"} ${
              navLink.name === "Join as a Provider" &&
              "bg-[#61BAAE] p-3 rounded-full text-white hover:bg-opacity-80"
            }`}
          >
            {navLink.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
