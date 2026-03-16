import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SkipNext: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M0 12L8.5 6L0 0V12ZM2 3.85938L5.03 5.99938L2 8.13938V3.85938ZM12 0H10V12H12V0Z" fill="currentColor"/>
  </svg>
);

SkipNext.displayName = "SkipNext";
export default SkipNext;
