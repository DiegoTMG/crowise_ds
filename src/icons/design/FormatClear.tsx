import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatClear: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 5.34L4.41 3.93L19.14 18.66L17.73 20.07L12.07 14.41L10.5 18.07H7.5L9.97 12.31L3 5.34ZM21 4.07V7.07H15.21L13.76 10.45L11.67 8.35L12.22 7.07H10.39L7.39 4.07H21Z" fill="currentColor"/>
  </svg>
);

FormatClear.displayName = "FormatClear";
export default FormatClear;
