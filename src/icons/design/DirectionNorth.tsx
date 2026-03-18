import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionNorth: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12 4L6 19.4021L6.568 20L12 17.4737L17.432 20L18 19.4021L12 4Z" fill="currentColor"/>
  </svg>
);

DirectionNorth.displayName = "DirectionNorth";
export default DirectionNorth;
