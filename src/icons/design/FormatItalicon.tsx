import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatItalicon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M10 5V8H12.21L8.79 16H6V19H14V16H11.79L15.21 8H18V5H10Z" fill="currentColor"/>
  </svg>
);

FormatItalicon.displayName = "FormatItalicon";
export default FormatItalicon;
