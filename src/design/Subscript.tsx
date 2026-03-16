import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Subscript: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 17.12 16"
    fill="none"
    {...props}
  >
    <path id="vector" d="M16.12 14H14.12V15H17.12V16H13.12V14C13.12 13.45 13.57 13 14.12 13H16.12V12H13.12V11H16.12C16.67 11 17.12 11.45 17.12 12V13C17.12 13.55 16.67 14 16.12 14ZM0 14H2.66L6.06 8.58H6.18L9.58 14H12.24L7.59 6.73L11.93 0H9.25L6.18 4.99H6.06L2.97 0H0.31L4.63 6.73L0 14Z" fill="currentColor"/>
  </svg>
);

Subscript.displayName = "Subscript";
export default Subscript;
