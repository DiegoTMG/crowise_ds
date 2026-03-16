import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UnfoldMore: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 9.18 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M7.76 6L4.59 2.83L1.42 6L0 4.59L4.59 0L9.17 4.59L7.76 6ZM1.42 12L4.59 15.17L7.76 12L9.18 13.41L4.59 18L0.01 13.41L1.42 12Z" fill="currentColor"/>
  </svg>
);

UnfoldMore.displayName = "UnfoldMore";
export default UnfoldMore;
