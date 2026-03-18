import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatSize: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M8.5 7.5V4.5H21.5V7.5H16.5V19.5H13.5V7.5H8.5ZM5.5 12.5H2.5V9.5H11.5V12.5H8.5V19.5H5.5V12.5Z" fill="currentColor"/>
  </svg>
);

FormatSize.displayName = "FormatSize";
export default FormatSize;
