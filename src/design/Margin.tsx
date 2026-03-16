import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Margin: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path id="vector" d="M0 0V18H18V0H0ZM16 16H2V2H16V16ZM8 4H10V6H8V4ZM4 4H6V6H4V4ZM12 4H14V6H12V4ZM4 8H6V10H4V8ZM8 8H10V10H8V8ZM12 8H14V10H12V8Z" fill="currentColor"/>
  </svg>
);

Margin.displayName = "Margin";
export default Margin;
