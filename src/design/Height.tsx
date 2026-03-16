import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Height: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 8 18"
    fill="none"
    {...props}
  >
    <path id="vector" d="M5 3.99H8L4 0L0 3.99H3V14.01H0L4 18L8 14.01H5V3.99Z" fill="currentColor"/>
  </svg>
);

Height.displayName = "Height";
export default Height;
