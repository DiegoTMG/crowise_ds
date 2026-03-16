import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowUp: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 7.41"
    fill="none"
    {...props}
  >
    <path id="vector" d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z" fill="currentColor"/>
  </svg>
);

KeyboardArrowUp.displayName = "KeyboardArrowUp";
export default KeyboardArrowUp;
