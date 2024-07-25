import React from "react";

const CustomAvatar = ({
  src,
  alt,
  size = "w-16 h-16",
  borderColor = "#8F4AE3",
  borderWidth = "border-2",
}) => {
  return (
    <>
      {src && size && (
        <div
          className={`inline-block ${size} ${borderWidth} ${borderColor} rounded-full overflow-hidden`}
        >
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      )}
    </>
  );
};

export default CustomAvatar;
