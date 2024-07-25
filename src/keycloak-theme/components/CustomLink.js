import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ label, linkname, url }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full mb-4 space-x-2">
      <p className="font-rubik font-medium text-base text-[#FFFFFF] leading-6 md:text-lg md:leading-7">
        {label}
      </p>
      {linkname && url && (
        <a href={url} aria-label={linkname}>
          <p className="underline font-rubik font-semibold text-base text-[#8F4DE3] leading-6 cursor-pointer hover:underline md:text-lg md:leading-7">
            {linkname}
          </p>
        </a>
      )}
    </div>
  );
};

export default CustomLink;
