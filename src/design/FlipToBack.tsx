import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlipToBack: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M4 2C4 0.9 4.89 0 6 0V2H4ZM6 4H4V6H6V4ZM6 8H4V10H6V8ZM10 12H8V14H10V12ZM16 2V0C17.1 0 18 0.9 18 2H16ZM10 0H8V2H10V0ZM6 12V14C4.89 14 4 13.1 4 12H6ZM16 10H18V8H16V10ZM18 6H16V4H18V6ZM16 14C17.1 14 18 13.1 18 12H16V14ZM0 4H2V16H14V18H2C0.89 18 0 17.1 0 16V4ZM12 2H14V0H12V2ZM14 14H12V12H14V14Z" fill="currentColor"/>
  </svg>
);

FlipToBack.displayName = "FlipToBack";
export default FlipToBack;
