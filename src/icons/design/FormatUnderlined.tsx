import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatUnderlined: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M18 11C18 14.31 15.31 17 12 17C8.69 17 6 14.31 6 11V3H8.5V11C8.5 12.93 10.07 14.5 12 14.5C13.93 14.5 15.5 12.93 15.5 11V3H18V11ZM5 21V19H19V21H5Z" fill="currentColor"/>
  </svg>
);

FormatUnderlined.displayName = "FormatUnderlined";
export default FormatUnderlined;
