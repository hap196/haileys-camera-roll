import React, { useState } from "react";
import Polaroid from "./Polaroid";
import polaroids from "../polaroids";

const Body = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 mt-20 mx-4">
      {polaroids.map((polaroid, index) => (
        <Polaroid key={index} imgSrc={polaroid.imgSrc} text={polaroid.text} date={polaroid.date} />
      ))}
    </div>
  );
};

export default Body;
