import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwapHoriz: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 14"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M14.01 0L18 4L14.01 8V5H7V3H14.01V0ZM0 10L3.99 6V9H11V11H3.99V14L0 10Z" fill="currentColor"/>
  </svg>
);

SwapHoriz.displayName = "SwapHoriz";
export default SwapHoriz;
