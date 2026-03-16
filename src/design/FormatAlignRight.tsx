import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignRight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 2V0H18V2H0ZM6 6H18V4H6V6ZM18 10H0V8H18V10ZM6 14H18V12H6V14ZM0 18H18V16H0V18Z" fill="currentColor"/>
  </svg>
);

FormatAlignRight.displayName = "FormatAlignRight";
export default FormatAlignRight;
