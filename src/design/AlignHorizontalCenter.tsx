import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignHorizontalCenter: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 20"
    fill="none"
    {...props}
  >
    <path id="vector" d="M8 0H10V5H18V8H10V12H15V15H10V20H8V15H3V12H8V8H0V5H8V0Z" fill="currentColor"/>
  </svg>
);

AlignHorizontalCenter.displayName = "AlignHorizontalCenter";
export default AlignHorizontalCenter;
