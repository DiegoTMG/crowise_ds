import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignVerticalBottom: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path id="vector" d="M20 20H0V18H20V20ZM8 0H5V16H8V0ZM15 6H12V16H15V6Z" fill="currentColor"/>
  </svg>
);

AlignVerticalBottom.displayName = "AlignVerticalBottom";
export default AlignVerticalBottom;
