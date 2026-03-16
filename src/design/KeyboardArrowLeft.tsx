import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowLeft: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 7.41 12"
    fill="none"
    {...props}
  >
    <path id="vector" d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="currentColor"/>
  </svg>
);

KeyboardArrowLeft.displayName = "KeyboardArrowLeft";
export default KeyboardArrowLeft;
