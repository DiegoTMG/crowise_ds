import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Functions: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 16"
    fill="none"
    {...props}
  >
    <path id="vector" d="M12 0H0V2L6.5 8L0 14V16H12V13H5L10 8L5 3H12V0Z" fill="currentColor"/>
  </svg>
);

Functions.displayName = "Functions";
export default Functions;
