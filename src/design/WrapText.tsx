import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WrapText: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 17 16"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M16 0H0V2H16V0ZM0 14H6V12H0V14ZM0 6H13C15.21 6 17 7.79 17 10C17 12.21 15.21 14 13 14H11V16L8 13L11 10V12H13.25C14.35 12 15.25 11.1 15.25 10C15.25 8.9 14.35 8 13.25 8H0V6Z" fill="currentColor"/>
  </svg>
);

WrapText.displayName = "WrapText";
export default WrapText;
