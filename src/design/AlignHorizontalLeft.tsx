import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignHorizontalLeft: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path id="vector" d="M2 20H0V0H2V20ZM20 5H4V8H20V5ZM14 12H4V15H14V12Z" fill="currentColor"/>
  </svg>
);

AlignHorizontalLeft.displayName = "AlignHorizontalLeft";
export default AlignHorizontalLeft;
