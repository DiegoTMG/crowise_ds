import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignRight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 5V3H21V5H3ZM9 9H21V7H9V9ZM21 13H3V11H21V13ZM9 17H21V15H9V17ZM3 21H21V19H3V21Z" fill="currentColor"/>
  </svg>
);

FormatAlignRight.displayName = "FormatAlignRight";
export default FormatAlignRight;
