import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatStrikethrough: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M5 4.5V7.5H10V10.5H14V7.5H19V4.5H5ZM10 19.5H14V16.5H10V19.5ZM21 14.5H3V12.5H21V14.5Z" fill="currentColor"/>
  </svg>
);

FormatStrikethrough.displayName = "FormatStrikethrough";
export default FormatStrikethrough;
