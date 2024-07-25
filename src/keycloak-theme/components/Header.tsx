import React from "react";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <img
      src={logo}
      loading="lazy"
      alt="ornament"
      className="logo absolute top-[8px] left-[4%] w-[122px] h-[60px]"
    ></img>
  );
};

export default Header;
