import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignHorizontalRight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M20 2H22V22H20V2ZM2 10H18V7H2V10ZM8 17H18V14H8V17Z" fill="currentColor"/>
  </svg>
);

AlignHorizontalRight.displayName = "AlignHorizontalRight";
export default AlignHorizontalRight;
