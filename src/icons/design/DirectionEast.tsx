import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionEast: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M20 12L4.59786 5.99996L3.99997 6.56796L6.52628 12L3.99997 17.432L4.59786 18L20 12Z" fill="currentColor"/>
  </svg>
);

DirectionEast.displayName = "DirectionEast";
export default DirectionEast;
