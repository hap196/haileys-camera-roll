import React from "react";
import Strawberries from "./assets/strawberries.gif";

const Header = () => {
  return (
    <div className="flex flex-row justify-center">
      <img src={Strawberries} className="h-36 md:h-52"/>
      <h1 className="text-center mt-14 md:mt-24 text-2xl font-bold font-poppins">
        Hailey's Camera Roll
      </h1>
      <img src={Strawberries} className="h-36 md:h-52"/>
    </div>
  );
};

export default Header;
