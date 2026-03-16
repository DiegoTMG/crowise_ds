import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowDown: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 7.41"
    fill="none"
    {...props}
  >
    <path id="vector" d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="currentColor"/>
  </svg>
);

KeyboardArrowDown.displayName = "KeyboardArrowDown";
export default KeyboardArrowDown;
