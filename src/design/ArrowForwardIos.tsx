import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowForwardIos: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 11.67 19.8"
    fill="none"
    {...props}
  >
    <path id="vector" d="M0 18.03L1.77 19.8L11.67 9.9L1.77 0L0 1.77L8.13 9.9L0 18.03Z" fill="currentColor"/>
  </svg>
);

ArrowForwardIos.displayName = "ArrowForwardIos";
export default ArrowForwardIos;
