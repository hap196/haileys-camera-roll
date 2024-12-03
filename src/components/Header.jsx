import React from "react";
import Strawberries from "../assets/strawberries.gif";

const Header = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-pink-50 to-pink-100 p-6 md:p-10">
      {/* Top Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-4 sm:space-y-0">
        <img
          src={Strawberries}
          className="h-24 md:h-36 rounded-full shadow-pink-200"
          alt="Strawberries"
        />
        <h1 className="text-3xl md:text-4xl font-semibold text-pink-600 tracking-wider text-center font-[Poppins]">
          Hailey's Camera Roll
        </h1>
        <img
          src={Strawberries}
          className="h-24 md:h-36 rounded-full shadow-pink-200"
          alt="Strawberries"
        />
      </div>

      {/* Subtitle */}
      <h4 className="text-center text-sm sm:text-lg md:text-xl font-medium text-pink-500 mt-4 font-[Poppins] italic">
        a photo diary of sorts
      </h4>
    </div>
  );
};

export default Header;
