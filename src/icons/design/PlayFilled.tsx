import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayFilled: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17.5 12L6.5 19V5L17.5 12Z" fill="currentColor"/>
  </svg>
);

PlayFilled.displayName = "PlayFilled";
export default PlayFilled;
