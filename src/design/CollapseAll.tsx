import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CollapseAll: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 12"
    fill="none"
    {...props}
  >
    <path id="Vector" d="M10 12H0V10H10V12ZM18 10H12L15 7L18 10ZM10 7H0V5H10V7ZM15 5L12 2H18L15 5ZM10 2H0V0H10V2Z" fill="currentColor"/>
  </svg>
);

CollapseAll.displayName = "CollapseAll";
export default CollapseAll;
