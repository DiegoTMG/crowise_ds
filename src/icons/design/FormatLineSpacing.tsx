import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatLineSpacing: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M8.75 7H6.25V17H8.75L5.25 20.5L1.75 17H4.25V7H1.75L5.25 3.5L8.75 7ZM10.25 7V5H22.25V7H10.25ZM10.25 19H22.25V17H10.25V19ZM22.25 13H10.25V11H22.25V13Z" fill="currentColor"/>
  </svg>
);

FormatLineSpacing.displayName = "FormatLineSpacing";
export default FormatLineSpacing;
