import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SkipPrevious: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M6 6H8V18H6V6ZM9.5 12L18 18V6L9.5 12ZM12.9697 11.9994L15.9997 14.1394V9.85938L12.9697 11.9994Z" fill="currentColor"/>
  </svg>
);

SkipPrevious.displayName = "SkipPrevious";
export default SkipPrevious;
