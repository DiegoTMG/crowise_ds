import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalDistribute: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path id="vector" d="M20 0V2H0V0H20ZM5 8.5V11.5H15V8.5H5ZM0 18V20H20V18H0Z" fill="currentColor"/>
  </svg>
);

VerticalDistribute.displayName = "VerticalDistribute";
export default VerticalDistribute;
