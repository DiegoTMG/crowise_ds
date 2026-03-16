import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Title: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 15"
    fill="none"
    {...props}
  >
    <path id="vector" d="M0 0V3H5.5V15H8.5V3H14V0H0Z" fill="currentColor"/>
  </svg>
);

Title.displayName = "Title";
export default Title;
