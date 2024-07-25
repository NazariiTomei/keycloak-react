import React from "react";

const CustomButton = ({ label,handleClick }) => {
  return (
    <>
      {label && (
        <button onClick={handleClick} className="w-full h-[48px] rounded-lg p-2 bg-gradient-to-r from-[#6CE7E4] to-[#8F4AE3] flex items-center justify-center">
          <p className="text-base sm:text-lg md:text-xl font-rubik font-semibold text-[#FFFFFF] leading-[1.5]">
            {label}
          </p>
        </button>
      )}
    </>
  );
};

export default CustomButton;
