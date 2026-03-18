import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Elevation: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8 16L3 21H13L8 16Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10.6411 17.2269L15 11L20.9995 21H14.4142L10.6411 17.2269Z" fill="currentColor"/>
<path d="M3 3L5.3 5.3L3.41 7.17L4.83 8.59L6.7 6.7L9 9L9 3L3 3Z" fill="currentColor"/>
  </svg>
);

Elevation.displayName = "Elevation";
export default Elevation;
