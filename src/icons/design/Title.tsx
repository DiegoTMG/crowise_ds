import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Title: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M5 4.5V7.5H10.5V19.5H13.5V7.5H19V4.5H5Z" fill="currentColor"/>
  </svg>
);

Title.displayName = "Title";
export default Title;
