import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Notes1: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 6H21V8L3 8.01V6ZM21 11.01L3 11V13H21V11.01ZM3 16H15V18H3V16Z" fill="currentColor"/>
  </svg>
);

Notes1.displayName = "Notes1";
export default Notes1;
