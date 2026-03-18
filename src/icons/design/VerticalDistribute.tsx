import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalDistribute: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 2V4H2V2H22ZM7 10.5V13.5H17V10.5H7ZM2 20V22H22V20H2Z" fill="currentColor"/>
  </svg>
);

VerticalDistribute.displayName = "VerticalDistribute";
export default VerticalDistribute;
