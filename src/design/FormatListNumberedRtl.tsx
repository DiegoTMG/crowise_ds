import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatListNumberedRtl: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19 16"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M18 4H17V1H16V0H18V4ZM18 13.5V13H16V12H19V16H16V15H18V14.5H17V13.5H18ZM16 7H17.8L16 9.1V10H19V9H17.2L19 6.9V6H16V7ZM14 1H0V3H14V1ZM0 13H14V15H0V13ZM14 7H0V9H14V7Z" fill="currentColor"/>
  </svg>
);

FormatListNumberedRtl.displayName = "FormatListNumberedRtl";
export default FormatListNumberedRtl;
