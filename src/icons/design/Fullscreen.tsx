import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Fullscreen: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M7 10H5V5H10V7H7V10ZM5 14H7V17H10V19H5V14ZM17 17H14V19H19V14H17V17ZM14 7V5H19V10H17V7H14Z" fill="currentColor"/>
  </svg>
);

Fullscreen.displayName = "Fullscreen";
export default Fullscreen;
