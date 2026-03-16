import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Videocam: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 12"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M1 0H13C13.55 0 14 0.45 14 1V4.5L18 0.5V11.5L14 7.5V11C14 11.55 13.55 12 13 12H1C0.45 12 0 11.55 0 11V1C0 0.45 0.45 0 1 0ZM12 10V2H2V10H12Z" fill="currentColor"/>
  </svg>
);

Videocam.displayName = "Videocam";
export default Videocam;
