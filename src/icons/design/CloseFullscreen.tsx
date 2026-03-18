import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CloseFullscreen: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3.4 22L2 20.6L8.6 14H4L4 12H12L12 20H10L10 15.4L3.4 22ZM12 12V4H14V8.6L20.6 2L22 3.4L15.4 10H20V12L12 12Z" fill="currentColor"/>
  </svg>
);

CloseFullscreen.displayName = "CloseFullscreen";
export default CloseFullscreen;
