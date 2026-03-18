import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignCenter: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 5V3H21V5H3ZM7 7V9H17V7H7ZM21 13H3V11H21V13ZM7 15V17H17V15H7ZM3 21H21V19H3V21Z" fill="currentColor"/>
  </svg>
);

FormatAlignCenter.displayName = "FormatAlignCenter";
export default FormatAlignCenter;
