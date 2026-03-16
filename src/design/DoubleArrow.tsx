import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoubleArrow: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16.5 14"
    fill="none"
    {...props}
  >
    <path d="M0 0H4.5L9.5 7L4.5 14H0L5 7L0 0Z" fill="currentColor"/>
<path d="M7 0H11.5L16.5 7L11.5 14H7L12 7L7 0Z" fill="currentColor"/>
  </svg>
);

DoubleArrow.displayName = "DoubleArrow";
export default DoubleArrow;
