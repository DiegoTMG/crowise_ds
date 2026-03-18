import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoubleArrow: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 5H8.5L13.5 12L8.5 19H4L9 12L4 5Z" fill="currentColor"/>
<path d="M11 5H15.5L20.5 12L15.5 19H11L16 12L11 5Z" fill="currentColor"/>
  </svg>
);

DoubleArrow.displayName = "DoubleArrow";
export default DoubleArrow;
