import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignHorizontalLeft: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 22H2V2H4V22ZM22 7H6V10H22V7ZM16 14H6V17H16V14Z" fill="currentColor"/>
  </svg>
);

AlignHorizontalLeft.displayName = "AlignHorizontalLeft";
export default AlignHorizontalLeft;
