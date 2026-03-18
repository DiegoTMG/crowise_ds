import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwapHoriz: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M17.01 5L21 9L17.01 13V10H10V8H17.01V5ZM3 15L6.99 11V14H14V16H6.99V19L3 15Z" fill="currentColor"/>
  </svg>
);

SwapHoriz.displayName = "SwapHoriz";
export default SwapHoriz;
