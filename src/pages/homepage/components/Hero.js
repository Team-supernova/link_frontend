import React from "react";
import magnifyingGlass from '../../../assets/svgs/magnifying-glass.svg'

export default function div() {
  return (
    <div className="md:w-1/2 mx-auto">
      <div className="w-[500px] mx-auto mt-28 text-center text-5xl leading-[123%]">
        Get Trusted Help for Home <span className="text-[#FFA17A]">Tasks</span>
      </div>
      <div className="w-[500px] mx-auto mt-3 text-center">
        Connecting You with Verified Local Service Providers for All Your Home
        Needs
      </div>
      {/*search bar*/}
      <div className="relative w-[95%] mt-10">
        <input
          type="text"
          placeholder="Search for.."
          className=" bg-gray-100 mx-auto w-full py-4 pl-14 pr-2 rounded-full"
        />
        <img
          src={magnifyingGlass}
          className="absolute top-[18px] left-[20px]"
        />
      </div>
    </div>
  );
}
