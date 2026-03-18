import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Coordinates: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M10 2H8V11H10V2Z" fill="currentColor"/>
<path d="M22 14H13V16H22V14Z" fill="currentColor"/>
<path d="M2 14H5V16H2V14Z" fill="currentColor"/>
<path d="M11 13H7V17H11V13Z" fill="currentColor"/>
<path d="M8 19H10V22H8V19Z" fill="currentColor"/>
  </svg>
);

Coordinates.displayName = "Coordinates";
export default Coordinates;
