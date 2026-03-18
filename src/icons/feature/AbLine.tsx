import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AbLine: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 8V4H6V8H4Z" fill="currentColor"/>
<path d="M4 14V10H6V14H4Z" fill="currentColor"/>
<path d="M4 16V20H6V16H4Z" fill="currentColor"/>
<path d="M18 8V4H20V8H18Z" fill="currentColor"/>
<path d="M18 14V10H20V14H18Z" fill="currentColor"/>
<path d="M18 16V20H20V16H18Z" fill="currentColor"/>
<path d="M16 8L12 4L8 8H11V20H13V8H16Z" fill="currentColor"/>
  </svg>
);

AbLine.displayName = "AbLine";
export default AbLine;
