import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardArrowRight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 7.41 12"
    fill="none"
    {...props}
  >
    <path id="vector" d="M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z" fill="currentColor"/>
  </svg>
);

KeyboardArrowRight.displayName = "KeyboardArrowRight";
export default KeyboardArrowRight;
