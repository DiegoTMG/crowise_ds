import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalAlignBottom: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M13 13H16L12 17L8 13H11V3H13V13ZM4 21V19H20V21H4Z" fill="currentColor"/>
  </svg>
);

VerticalAlignBottom.displayName = "VerticalAlignBottom";
export default VerticalAlignBottom;
