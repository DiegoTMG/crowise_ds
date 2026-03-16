import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatTextdirectionRToL: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M14 0H6C3.79 0 2 1.79 2 4C2 6.21 3.79 8 6 8V13H8V2H10V13H12V2H14V0ZM6 6C4.9 6 4 5.1 4 4C4 2.9 4.9 2 6 2V6ZM4 17V20L0 16L4 12V15H16V17H4Z" fill="currentColor"/>
  </svg>
);

FormatTextdirectionRToL.displayName = "FormatTextdirectionRToL";
export default FormatTextdirectionRToL;
