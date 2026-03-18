import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Functions: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18 4H6V6L12.5 12L6 18V20H18V17H11L16 12L11 7H18V4Z" fill="currentColor"/>
  </svg>
);

Functions.displayName = "Functions";
export default Functions;
