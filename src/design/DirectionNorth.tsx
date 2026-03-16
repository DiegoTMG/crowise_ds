import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionNorth: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 16"
    fill="none"
    {...props}
  >
    <path id="vector" d="M6 0L0 15.4021L0.568 16L6 13.4737L11.432 16L12 15.4021L6 0Z" fill="currentColor"/>
  </svg>
);

DirectionNorth.displayName = "DirectionNorth";
export default DirectionNorth;
