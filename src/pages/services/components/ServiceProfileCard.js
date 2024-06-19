import React from "react";
import Button from "../../../components/Buttons";

export default function ServiceProfileCard({
  image,
  rating,
  name,
  service,
  profile,
  profileLink,
  message,
}) {
  return (
    <div className="py-4 px-2 flex flex-col items-center space-y-4 shadow-slate-500 rounded-md shadow-md">
      <img
        src={image}
        alt="svgs"
        className="rounded-full border border-black w-[70px] h-[70px]"
      />
      <div className="flex flex-col items-center">
        <p className="capitalize text-[1.1rem] font-semibold">
          {name}
        </p>
        <span className="text-sm">{service}</span>
      </div>

      <img
        src={rating}
        alt="rating"
        className="h-[20px]"
      />
      <div className="w-[75%] flex items-center justify-center space-x-1">
        
          <Button
            type={"customizedBlack"}
            text={profile}
            to={profileLink}
          />
       
          <Button
            type={"customizedWhite"}
            text={message}
            to={profileLink}
          />
        
      </div>
    </div>
  );
}
