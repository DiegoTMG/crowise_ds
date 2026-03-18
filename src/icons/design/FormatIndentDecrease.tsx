import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatIndentDecrease: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 5V3H21V5H3ZM7 16L3 12L7 8V16ZM21 17H11V15H21V17ZM3 21H21V19H3V21ZM11 9H21V7H11V9ZM21 13H11V11H21V13Z" fill="currentColor"/>
  </svg>
);

FormatIndentDecrease.displayName = "FormatIndentDecrease";
export default FormatIndentDecrease;
