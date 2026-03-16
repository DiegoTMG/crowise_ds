import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalAlignBottom: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M9 10H12L8 14L4 10H7V0H9V10ZM0 18V16H16V18H0Z" fill="currentColor"/>
  </svg>
);

VerticalAlignBottom.displayName = "VerticalAlignBottom";
export default VerticalAlignBottom;
