import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShortText: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M20 9H4V11H20V9ZM14 13H4V15H14V13Z" fill="currentColor"/>
  </svg>
);

ShortText.displayName = "ShortText";
export default ShortText;
