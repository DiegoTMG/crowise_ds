import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatIndentIncrease: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 2V0H18V2H0ZM4 9L0 13V5L4 9ZM18 18H0V16H18V18ZM8 14H18V12H8V14ZM8 6H18V4H8V6ZM18 10H8V8H18V10Z" fill="currentColor"/>
  </svg>
);

FormatIndentIncrease.displayName = "FormatIndentIncrease";
export default FormatIndentIncrease;
