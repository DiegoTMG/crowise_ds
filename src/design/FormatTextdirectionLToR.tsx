import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatTextdirectionLToR: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M12 0H4C1.79 0 0 1.79 0 4C0 6.21 1.79 8 4 8V13H6V2H8V13H10V2H12V0ZM4 6C2.9 6 2 5.1 2 4C2 2.9 2.9 2 4 2V6ZM12 15V12L16 16L12 20V17H0V15H12Z" fill="currentColor"/>
  </svg>
);

FormatTextdirectionLToR.displayName = "FormatTextdirectionLToR";
export default FormatTextdirectionLToR;
