import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowBackIos: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 11.67 19.8"
    fill="none"
    {...props}
  >
    <path id="vector" d="M11.67 1.77L9.89 0L0 9.9L9.9 19.8L11.67 18.03L3.54 9.9L11.67 1.77Z" fill="currentColor"/>
  </svg>
);

ArrowBackIos.displayName = "ArrowBackIos";
export default ArrowBackIos;
