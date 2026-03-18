import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalAlignCenter: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M16 5H13V1H11V5H8L12 9L16 5ZM8 19H11V23H13V19H16L12 15L8 19ZM4 13V11H20V13H4Z" fill="currentColor"/>
  </svg>
);

VerticalAlignCenter.displayName = "VerticalAlignCenter";
export default VerticalAlignCenter;
