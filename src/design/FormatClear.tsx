import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatClear: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 16.14"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 1.41L1.41 0L16.14 14.73L14.73 16.14L9.07 10.48L7.5 14.14H4.5L6.97 8.38L0 1.41ZM18 0.14V3.14H12.21L10.76 6.52L8.67 4.42L9.22 3.14H7.39L4.39 0.14H18Z" fill="currentColor"/>
  </svg>
);

FormatClear.displayName = "FormatClear";
export default FormatClear;
