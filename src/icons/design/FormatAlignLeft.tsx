import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignLeft: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 5V3H21V5H3ZM15 7H3V9H15V7ZM15 15H3V17H15V15ZM21 13H3V11H21V13ZM3 21H21V19H3V21Z" fill="currentColor"/>
  </svg>
);

FormatAlignLeft.displayName = "FormatAlignLeft";
export default FormatAlignLeft;
