import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignCenter: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 2V0H18V2H0ZM4 4V6H14V4H4ZM18 10H0V8H18V10ZM4 12V14H14V12H4ZM0 18H18V16H0V18Z" fill="currentColor"/>
  </svg>
);

FormatAlignCenter.displayName = "FormatAlignCenter";
export default FormatAlignCenter;
