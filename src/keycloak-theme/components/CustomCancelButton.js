import React from "react";

const CustomCancelButton = ({ label }) => {
  return (
    <>
      {label && (
        <button className="w-full h-[48px] rounded-lg border-2 border-[#8F4AE3] flex items-center justify-center p-2 bg-dark">
          <p className="text-base sm:text-lg md:text-xl font-rubik font-semibold text-[#8F4AE3] leading-tight">
            {label}
          </p>
        </button>
      )}
    </>
  );
};

export default CustomCancelButton;
