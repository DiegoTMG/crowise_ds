import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionWest: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4.00003 12L19.4021 18L20 17.432L17.4737 12L20 6.56804L19.4021 6.00004L4.00003 12Z" fill="currentColor"/>
  </svg>
);

DirectionWest.displayName = "DirectionWest";
export default DirectionWest;
