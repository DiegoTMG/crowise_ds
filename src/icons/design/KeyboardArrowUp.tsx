import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowUp: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7.41 15.7069L12 11.1269L16.59 15.7069L18 14.2969L12 8.29688L6 14.2969L7.41 15.7069Z" fill="currentColor"/>
  </svg>
);

KeyboardArrowUp.displayName = "KeyboardArrowUp";
export default KeyboardArrowUp;
