import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MenuOpen: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18.01 12"
    fill="none"
    {...props}
  >
    <path d="M0 0V2H13V0H0Z" fill="currentColor"/>
<path d="M10 7H0V5H10V7Z" fill="currentColor"/>
<path d="M13 12H0V10H13V12Z" fill="currentColor"/>
<path d="M14.43 6L18.01 9.59L16.6 11L11.6 6L16.6 1L18.01 2.41L14.43 6Z" fill="currentColor"/>
  </svg>
);

MenuOpen.displayName = "MenuOpen";
export default MenuOpen;
