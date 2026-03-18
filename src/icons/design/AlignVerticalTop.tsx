import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignVerticalTop: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 2V4H2V2H22ZM7 22H10V6H7V22ZM14 16H17V6H14V16Z" fill="currentColor"/>
  </svg>
);

AlignVerticalTop.displayName = "AlignVerticalTop";
export default AlignVerticalTop;
