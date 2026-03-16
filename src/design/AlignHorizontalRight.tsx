import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignHorizontalRight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path id="vector" d="M18 0H20V20H18V0ZM0 8H16V5H0V8ZM6 15H16V12H6V15Z" fill="currentColor"/>
  </svg>
);

AlignHorizontalRight.displayName = "AlignHorizontalRight";
export default AlignHorizontalRight;
