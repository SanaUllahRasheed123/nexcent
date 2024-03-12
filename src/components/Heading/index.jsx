import React from "react";

const sizes = {
  s: "text-[28px] font-bold leading-[34px]",
  md: "text-4xl font-semibold leading-[44px]",
  xs: "text-xl font-semibold leading-[25px]",
  lg: "text-[64px] font-semibold leading-[76px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
