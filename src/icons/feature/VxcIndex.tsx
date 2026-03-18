import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VxcIndex: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M2.08008 19.5081L10 11.5882V14.4182L3.49008 20.9181C3.15008 20.8281 2.84008 20.6481 2.59008 20.4081C2.35008 20.1581 2.17008 19.8481 2.08008 19.5081Z" fill="currentColor"/>
<path d="M10 3.88003L2 11.88V14.71L10 6.71003V3.88003Z" fill="currentColor"/>
<path d="M4 3C2.9 3 2 3.9 2 5V7L6 3H4Z" fill="currentColor"/>
<path d="M8.29004 21L10 21V19.2901L8.29004 21Z" fill="currentColor"/>
<path d="M10 1H12V23H10V1Z" fill="currentColor"/>
<path d="M14 7V5L18 5V3H20V5L22 5V7H20V17H22V19H20V21H18V19H14V17H18V7L14 7Z" fill="currentColor"/>
  </svg>
);

VxcIndex.displayName = "VxcIndex";
export default VxcIndex;
