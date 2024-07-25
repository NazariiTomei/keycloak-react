import React from "react";

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="custom-checkbox"
        className="h-5 w-5 appearance-none bg-dark rounded-lg border border-[#8F4AE3] checked:bg-blue-600 checked:border-transparent focus:outline-none"
      />
      {label && (
        <label
          htmlFor="custom-checkbox"
          className="font-rubik text-base text-[#FFFFFF] leading-6"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CustomCheckbox;
