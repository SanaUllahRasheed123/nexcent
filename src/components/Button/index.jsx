import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    green_500: "bg-green-500 text-white-A700",
    green_50: "bg-green-50",
    gray_100_01: "bg-gray-100_01",
    white_A700: "bg-white-A700",
  },
};
const sizes = {
  md: "h-[52px] px-8 text-base",
  sm: "h-[48px] px-px",
  xs: "h-[32px] px-[7px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["green_500", "green_50", "gray_100_01", "white_A700"]),
};

export { Button };
