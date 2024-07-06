import React, { useState } from 'react';

const Polaroid = ({ imgSrc, text }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <div
        className="polaroid bg-white shadow-lg p-5 rounded-md max-w-xs m-4 cursor-pointer transition-transform transform hover:scale-105"
        onClick={togglePopup}
      >
        <div className="img-container">
          <img src={imgSrc} alt="Polaroid" className="w-full rounded-md" />
        </div>
        <div className="text-container mt-8 mb-4 text-center">
          <p className="text-sm font-courier-prime text-gray-800">{text}</p>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-lg max-h-[90vh]">
            <button
              className="absolute top-[-40px] right-[-40px] flex items-center justify-center w-8 h-8 text-gray-800 text-xl rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={togglePopup}
            >
              &times;
            </button>
            <img src={imgSrc} alt="Polaroid" className="max-w-full max-h-[80vh] rounded-md" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Polaroid;
