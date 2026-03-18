import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatTextdirectionRToL: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M18 2H10C7.79 2 6 3.79 6 6C6 8.21 7.79 10 10 10V15H12V4H14V15H16V4H18V2ZM10 8C8.9 8 8 7.1 8 6C8 4.9 8.9 4 10 4V8ZM8 19V22L4 18L8 14V17H20V19H8Z" fill="currentColor"/>
  </svg>
);

FormatTextdirectionRToL.displayName = "FormatTextdirectionRToL";
export default FormatTextdirectionRToL;
