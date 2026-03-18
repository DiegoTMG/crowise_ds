import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Ruler: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 6H21C22.1 6 23 6.9 23 8V16C23 17.1 22.1 18 21 18H3C1.9 18 1 17.1 1 16V8C1 6.9 1.9 6 3 6ZM3 16H21V8H19V12H17V8H15V12H13V8H11V12H9V8H7V12H5V8H3V16Z" fill="currentColor"/>
  </svg>
);

Ruler.displayName = "Ruler";
export default Ruler;
