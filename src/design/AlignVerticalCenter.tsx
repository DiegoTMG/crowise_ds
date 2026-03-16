import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignVerticalCenter: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20.16 18"
    fill="none"
    {...props}
  >
    <path id="vector" d="M20.16 8H15.16V3H12.16V8H8.16V0H5.16V8H0V10H5.16V18H8.16V10H12.16V15H15.16V10H20.16V8Z" fill="currentColor"/>
  </svg>
);

AlignVerticalCenter.displayName = "AlignVerticalCenter";
export default AlignVerticalCenter;
