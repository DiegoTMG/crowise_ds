import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SkipPrevious: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M0 0H2V12H0V0ZM3.5 6L12 12V0L3.5 6ZM6.96973 5.99938L9.99973 8.13938V3.85938L6.96973 5.99938Z" fill="currentColor"/>
  </svg>
);

SkipPrevious.displayName = "SkipPrevious";
export default SkipPrevious;
