import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SidebarOpen: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 6V8H13V6H3Z" fill="currentColor"/>
<path d="M17.4176 13H3V11H17.4176L15 8.41L16.3198 7L21 12L16.3198 17L15 15.59L17.4176 13Z" fill="currentColor"/>
<path d="M13 18H3V16H13V18Z" fill="currentColor"/>
  </svg>
);

SidebarOpen.displayName = "SidebarOpen";
export default SidebarOpen;
