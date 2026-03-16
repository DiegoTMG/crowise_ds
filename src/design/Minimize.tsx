import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Minimize: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 2"
    fill="none"
    {...props}
  >
    <path id="vector" d="M0 0H12V2H0V0Z" fill="currentColor"/>
  </svg>
);

Minimize.displayName = "Minimize";
export default Minimize;
