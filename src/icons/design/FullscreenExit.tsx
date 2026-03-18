import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FullscreenExit: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M5 8H8V5H10V10H5V8ZM8 16H5V14H10V19H8V16ZM14 19H16V16H19V14H14V19ZM16 5V8H19V10H14V5H16Z" fill="currentColor"/>
  </svg>
);

FullscreenExit.displayName = "FullscreenExit";
export default FullscreenExit;
