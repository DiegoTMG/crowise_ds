import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HorizontalDistribute: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path id="vector" d="M2 20H0V0H2V20ZM20 0H18V20H20V0ZM11.5 5H8.5V15H11.5V5Z" fill="currentColor"/>
  </svg>
);

HorizontalDistribute.displayName = "HorizontalDistribute";
export default HorizontalDistribute;
