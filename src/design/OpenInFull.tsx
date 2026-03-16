import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OpenInFull: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path id="vector" d="M0 18V10H2V14.6L14.6 2H10V0H18V8H16V3.4L3.4 16H8V18H0Z" fill="currentColor"/>
  </svg>
);

OpenInFull.displayName = "OpenInFull";
export default OpenInFull;
