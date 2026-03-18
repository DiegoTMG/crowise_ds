import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignVerticalCenter: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 11H17V6H14V11H10V3H7V11H1.84V13H7V21H10V13H14V18H17V13H22V11Z" fill="currentColor"/>
  </svg>
);

AlignVerticalCenter.displayName = "AlignVerticalCenter";
export default AlignVerticalCenter;
