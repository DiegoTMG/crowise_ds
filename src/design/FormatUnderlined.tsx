import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatUnderlined: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M13 8C13 11.31 10.31 14 7 14C3.69 14 1 11.31 1 8V0H3.5V8C3.5 9.93 5.07 11.5 7 11.5C8.93 11.5 10.5 9.93 10.5 8V0H13V8ZM0 18V16H14V18H0Z" fill="currentColor"/>
  </svg>
);

FormatUnderlined.displayName = "FormatUnderlined";
export default FormatUnderlined;
