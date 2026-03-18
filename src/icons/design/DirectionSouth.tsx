import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionSouth: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 20L18 4.59786L17.432 3.99997L12 6.52628L6.56798 3.99997L5.99998 4.59786L12 20Z" fill="currentColor"/>
  </svg>
);

DirectionSouth.displayName = "DirectionSouth";
export default DirectionSouth;
