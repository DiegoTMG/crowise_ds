import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatStrikethrough: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 15"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M2 0V3H7V6H11V3H16V0H2ZM7 15H11V12H7V15ZM18 10H0V8H18V10Z" fill="currentColor"/>
  </svg>
);

FormatStrikethrough.displayName = "FormatStrikethrough";
export default FormatStrikethrough;
