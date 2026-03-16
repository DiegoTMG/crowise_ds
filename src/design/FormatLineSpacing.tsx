import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatLineSpacing: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20.5 17"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M7 3.5H4.5V13.5H7L3.5 17L0 13.5H2.5V3.5H0L3.5 0L7 3.5ZM8.5 3.5V1.5H20.5V3.5H8.5ZM8.5 15.5H20.5V13.5H8.5V15.5ZM20.5 9.5H8.5V7.5H20.5V9.5Z" fill="currentColor"/>
  </svg>
);

FormatLineSpacing.displayName = "FormatLineSpacing";
export default FormatLineSpacing;
