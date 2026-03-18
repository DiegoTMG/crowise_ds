import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SidebarClose: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21 6V8H11V6H21Z" fill="currentColor"/>
<path d="M6.58242 13H21V11H6.58242L9 8.41L7.68019 7L3 12L7.68019 17L9 15.59L6.58242 13Z" fill="currentColor"/>
<path d="M11 18H21V16H11V18Z" fill="currentColor"/>
  </svg>
);

SidebarClose.displayName = "SidebarClose";
export default SidebarClose;
