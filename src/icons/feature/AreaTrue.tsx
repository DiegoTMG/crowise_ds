import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AreaTrue: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5 3H7V5L17 5V3H19V5L21 5V7H19V17H21V19H19V21H17V19L7 19V21H5V19H3V17H5V7H3V5L5 5V3ZM7 17V7L17 7V17L7 17Z" fill="currentColor"/>
  </svg>
);

AreaTrue.displayName = "AreaTrue";
export default AreaTrue;
