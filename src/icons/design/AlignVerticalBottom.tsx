import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignVerticalBottom: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 22H2V20H22V22ZM10 2H7V18H10V2ZM17 8H14V18H17V8Z" fill="currentColor"/>
  </svg>
);

AlignVerticalBottom.displayName = "AlignVerticalBottom";
export default AlignVerticalBottom;
