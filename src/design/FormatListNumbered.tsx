import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatListNumbered: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19 16"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M2 4H1V1H0V0H2V4ZM2 13.5V13H0V12H3V16H0V15H2V14.5H1V13.5H2ZM0 7H1.8L0 9.1V10H3V9H1.2L3 6.9V6H0V7ZM5 3V1H19V3H5ZM5 15H19V13H5V15ZM19 9H5V7H19V9Z" fill="currentColor"/>
  </svg>
);

FormatListNumbered.displayName = "FormatListNumbered";
export default FormatListNumbered;
