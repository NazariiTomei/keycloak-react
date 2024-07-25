import React from "react";

const CustomHeader = ({ title }) => {
  return (
    <>
      {title && (
        <p className="w-full text-[#FFFFFF] font-rubik font-semibold text-3xl leading-tight pb-8 text-left md:text-4xl md:leading-snug">
          {title}
        </p>
      )}
    </>
  );
};

export default CustomHeader;
