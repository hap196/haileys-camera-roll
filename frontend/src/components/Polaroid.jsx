import React from 'react';

const Polaroid = ({ imgSrc, text }) => {
  return (
    <div className="polaroid bg-white shadow-lg p-5 rounded-md max-w-xs m-4">
      <div className="img-container">
        <img src={imgSrc} alt="Polaroid" className="w-full rounded-md" />
      </div>
      <div className="text-container mt-8 mb-4 text-center">
        <p className="text-sm font-courier-prime text-gray-800">{text}</p>
      </div>
    </div>
  );
};

export default Polaroid;
