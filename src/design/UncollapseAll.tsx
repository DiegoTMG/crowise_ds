import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UncollapseAll: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 12"
    fill="none"
    {...props}
  >
    <path id="Vector" d="M10 12H0V10H10V12ZM15 10L12 7H18L15 10ZM10 7H0V5H10V7ZM18 5H12L15 2L18 5ZM10 2H0V0H10V2Z" fill="currentColor"/>
  </svg>
);

UncollapseAll.displayName = "UncollapseAll";
export default UncollapseAll;
