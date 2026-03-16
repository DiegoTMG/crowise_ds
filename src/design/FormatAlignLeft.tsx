import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignLeft: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 2V0H18V2H0ZM12 4H0V6H12V4ZM12 12H0V14H12V12ZM18 10H0V8H18V10ZM0 18H18V16H0V18Z" fill="currentColor"/>
  </svg>
);

FormatAlignLeft.displayName = "FormatAlignLeft";
export default FormatAlignLeft;
