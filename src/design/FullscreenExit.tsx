import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FullscreenExit: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 3H3V0H5V5H0V3ZM3 11H0V9H5V14H3V11ZM9 14H11V11H14V9H9V14ZM11 0V3H14V5H9V0H11Z" fill="currentColor"/>
  </svg>
);

FullscreenExit.displayName = "FullscreenExit";
export default FullscreenExit;
