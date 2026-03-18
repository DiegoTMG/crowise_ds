import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Height: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M13 6.99H16L12 3L8 6.99H11V17.01H8L12 21L16 17.01H13V6.99Z" fill="currentColor"/>
  </svg>
);

Height.displayName = "Height";
export default Height;
