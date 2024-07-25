import React from "react";

const CustomSubHeader = ({ subtitle, position = "text-left" }) => {
  return (
    <>
      {subtitle && (
        <p
          className={`w-full text-[#FFFFFF8F] font-rubik font-normal text-base leading-6 ${position}`}
        >
          {subtitle}
        </p>
      )}
    </>
  );
};

export default CustomSubHeader;
