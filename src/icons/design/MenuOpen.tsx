import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MenuOpen: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 6V8H16V6H3Z" fill="currentColor"/>
<path d="M13 13H3V11H13V13Z" fill="currentColor"/>
<path d="M16 18H3V16H16V18Z" fill="currentColor"/>
<path d="M17.43 12L21.01 15.59L19.6 17L14.6 12L19.6 7L21.01 8.41L17.43 12Z" fill="currentColor"/>
  </svg>
);

MenuOpen.displayName = "MenuOpen";
export default MenuOpen;
