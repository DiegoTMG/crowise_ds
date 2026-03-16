import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatSize: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19 15"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M6 3V0H19V3H14V15H11V3H6ZM3 8H0V5H9V8H6V15H3V8Z" fill="currentColor"/>
  </svg>
);

FormatSize.displayName = "FormatSize";
export default FormatSize;
