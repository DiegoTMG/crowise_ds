import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UnfoldLess: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M15.17 4L16.59 5.41L12 10L7.41003 5.41L8.83003 4L12 7.17L15.17 4ZM8.83003 20L7.41003 18.59L12 14L16.58 18.59L15.17 20L12 16.83L8.83003 20Z" fill="currentColor"/>
  </svg>
);

UnfoldLess.displayName = "UnfoldLess";
export default UnfoldLess;
