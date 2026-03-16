import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Add: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path id="vector" d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="currentColor"/>
  </svg>
);

Add.displayName = "Add";
export default Add;
