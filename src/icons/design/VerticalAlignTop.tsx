import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalAlignTop: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4 5V3H20V5H4ZM11 11H8L12 7L16 11H13V21H11V11Z" fill="currentColor"/>
  </svg>
);

VerticalAlignTop.displayName = "VerticalAlignTop";
export default VerticalAlignTop;
