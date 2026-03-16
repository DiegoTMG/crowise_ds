import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalAlignTop: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 2V0H16V2H0ZM7 8H4L8 4L12 8H9V18H7V8Z" fill="currentColor"/>
  </svg>
);

VerticalAlignTop.displayName = "VerticalAlignTop";
export default VerticalAlignTop;
