import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SidebarClose: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 12"
    fill="none"
    {...props}
  >
    <path d="M18 0V2H8V0H18Z" fill="currentColor"/>
<path d="M3.58242 7H18V5H3.58242L6 2.41L4.68019 1L0 6L4.68019 11L6 9.59L3.58242 7Z" fill="currentColor"/>
<path d="M8 12H18V10H8V12Z" fill="currentColor"/>
  </svg>
);

SidebarClose.displayName = "SidebarClose";
export default SidebarClose;
