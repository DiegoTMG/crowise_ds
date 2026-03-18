import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatTextdirectionLToR: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M16 2H8C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10V15H10V4H12V15H14V4H16V2ZM8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4V8ZM16 17V14L20 18L16 22V19H4V17H16Z" fill="currentColor"/>
  </svg>
);

FormatTextdirectionLToR.displayName = "FormatTextdirectionLToR";
export default FormatTextdirectionLToR;
