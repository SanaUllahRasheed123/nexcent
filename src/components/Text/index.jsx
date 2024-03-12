import React from "react";

const sizes = {
  xs: "text-[8px] font-normal",
  s: "text-sm font-normal leading-[17px]",
  md: "text-base font-normal leading-5",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
