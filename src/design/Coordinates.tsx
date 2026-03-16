import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Coordinates: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path d="M8 0H6V9H8V0Z" fill="currentColor"/>
<path d="M20 12H11V14H20V12Z" fill="currentColor"/>
<path d="M0 12H3V14H0V12Z" fill="currentColor"/>
<path d="M9 11H5V15H9V11Z" fill="currentColor"/>
<path d="M6 17H8V20H6V17Z" fill="currentColor"/>
  </svg>
);

Coordinates.displayName = "Coordinates";
export default Coordinates;
