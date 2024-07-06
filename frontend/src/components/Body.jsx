import React, { useState } from "react";
import Polaroid from "./Polaroid";
import polaroids from "../polaroids";

const Body = () => {
  return (
    <div className="flex flex-row items-center justify-center bg-pink-100 p-4 mt-20">
      {polaroids.map((polaroid, index) => (
        <Polaroid key={index} imgSrc={polaroid.imgSrc} text={polaroid.text} />
      ))}
    </div>
  );
};

export default Body;
