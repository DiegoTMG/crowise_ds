import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatItalicon: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 14"
    fill="none"
    {...props}
  >
    <path id="vector" d="M4 0V3H6.21L2.79 11H0V14H8V11H5.79L9.21 3H12V0H4Z" fill="currentColor"/>
  </svg>
);

FormatItalicon.displayName = "FormatItalicon";
export default FormatItalicon;
