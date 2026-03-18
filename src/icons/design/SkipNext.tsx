import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SkipNext: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M6 18L14.5 12L6 6V18ZM8 9.85938L11.03 11.9994L8 14.1394V9.85938ZM18 6H16V18H18V6Z" fill="currentColor"/>
  </svg>
);

SkipNext.displayName = "SkipNext";
export default SkipNext;
