import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MicNone: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 19"
    fill="none"
    {...props}
  >
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M7 12C8.66 12 10 10.66 10 9V3C10 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3V9C4 10.66 5.34 12 7 12ZM6 3C6 2.45 6.45 2 7 2C7.55 2 8 2.45 8 3V9C8 9.55 7.55 10 7 10C6.45 10 6 9.55 6 9V3ZM7 14C9.76 14 12 11.76 12 9H14C14 12.53 11.39 15.43 8 15.92V19H6V15.92C2.61 15.43 0 12.53 0 9H2C2 11.76 4.24 14 7 14Z" fill="currentColor"/>
  </svg>
);

MicNone.displayName = "MicNone";
export default MicNone;
