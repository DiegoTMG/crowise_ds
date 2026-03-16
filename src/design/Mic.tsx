import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Mic: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 19"
    fill="none"
    {...props}
  >
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M10 9C10 10.66 8.66 12 7 12C5.34 12 4 10.66 4 9V3C4 1.34 5.34 0 7 0C8.66 0 10 1.34 10 3V9ZM7 14C9.76 14 12 11.76 12 9H14C14 12.53 11.39 15.43 8 15.92V19H6V15.92C2.61 15.43 0 12.53 0 9H2C2 11.76 4.24 14 7 14Z" fill="currentColor"/>
  </svg>
);

Mic.displayName = "Mic";
export default Mic;
