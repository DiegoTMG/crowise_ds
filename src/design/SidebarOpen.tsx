import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SidebarOpen: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 12"
    fill="none"
    {...props}
  >
    <path d="M0 0V2H10V0H0Z" fill="currentColor"/>
<path d="M14.4176 7H0V5H14.4176L12 2.41L13.3198 1L18 6L13.3198 11L12 9.59L14.4176 7Z" fill="currentColor"/>
<path d="M10 12H0V10H10V12Z" fill="currentColor"/>
  </svg>
);

SidebarOpen.displayName = "SidebarOpen";
export default SidebarOpen;
