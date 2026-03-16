import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UnfoldLess: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 9.18 16"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M7.76 0L9.18 1.41L4.59 6L0 1.41L1.42 0L4.59 3.17L7.76 0ZM1.42 16L0 14.59L4.59 10L9.17 14.59L7.76 16L4.59 12.83L1.42 16Z" fill="currentColor"/>
  </svg>
);

UnfoldLess.displayName = "UnfoldLess";
export default UnfoldLess;
