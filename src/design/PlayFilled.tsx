import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayFilled: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 11 14"
    fill="none"
    {...props}
  >
    <path id="Vector" d="M11 7L0 14V0L11 7Z" fill="currentColor"/>
  </svg>
);

PlayFilled.displayName = "PlayFilled";
export default PlayFilled;
