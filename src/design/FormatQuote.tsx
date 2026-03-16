import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatQuote: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 12"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M5.62 12H0.38L2.38 8H0V0H8V7.24L5.62 12ZM10.38 12H15.62L18 7.24V0H10V8H12.38L10.38 12ZM14.38 10H13.62L15.62 6H12V2H16V6.76L14.38 10ZM4.38 10H3.62L5.62 6H2V2H6V6.76L4.38 10Z" fill="currentColor"/>
  </svg>
);

FormatQuote.displayName = "FormatQuote";
export default FormatQuote;
