import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatAlignJustify: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 5V3H21V5H3ZM3 9H21V7H3V9ZM21 13H3V11H21V13ZM3 17H21V15H3V17ZM3 21H21V19H3V21Z" fill="currentColor"/>
  </svg>
);

FormatAlignJustify.displayName = "FormatAlignJustify";
export default FormatAlignJustify;
