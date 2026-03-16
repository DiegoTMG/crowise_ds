import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AspectRatio: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 18"
    fill="none"
    {...props}
  >
    <path id="vector" d="M18 9H16V12H13V14H18V9ZM6 6H9V4H4V9H6V6ZM20 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16.01H2V1.99H20V16.01Z" fill="currentColor"/>
  </svg>
);

AspectRatio.displayName = "AspectRatio";
export default AspectRatio;
