import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatIndentDecrease: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 2V0H18V2H0ZM4 13L0 9L4 5V13ZM18 14H8V12H18V14ZM0 18H18V16H0V18ZM8 6H18V4H8V6ZM18 10H8V8H18V10Z" fill="currentColor"/>
  </svg>
);

FormatIndentDecrease.displayName = "FormatIndentDecrease";
export default FormatIndentDecrease;
