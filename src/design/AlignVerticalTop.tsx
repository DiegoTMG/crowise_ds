import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignVerticalTop: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path id="vector" d="M20 0V2H0V0H20ZM5 20H8V4H5V20ZM12 14H15V4H12V14Z" fill="currentColor"/>
  </svg>
);

AlignVerticalTop.displayName = "AlignVerticalTop";
export default AlignVerticalTop;
