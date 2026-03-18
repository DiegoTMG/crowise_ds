import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Merge: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M4 4V14H6V16H3C2.44772 16 2 15.5523 2 15V3C2 2.44772 2.44772 2 3 2H15C15.5523 2 16 2.44772 16 3V6H14V4H4Z" fill="currentColor"/>
<path d="M10 18V20L20 20L20 10L18 10V8L21 8C21.5523 8 22 8.44772 22 9L22 21C22 21.5523 21.5523 22 21 22L9 22C8.44772 22 8 21.5523 8 21L8 18H10Z" fill="currentColor"/>
<path d="M8 8H10V9H9V10H8V8Z" fill="currentColor"/>
<path d="M16 16V14H15V15H14V16H16Z" fill="currentColor"/>
<path d="M16 8V10H15V9H14V8H16Z" fill="currentColor"/>
<path d="M8 16H10V15H9L9 14H8L8 16Z" fill="currentColor"/>
<path d="M8 11H9V13H8V11Z" fill="currentColor"/>
<path d="M13 9V8H11V9H13Z" fill="currentColor"/>
<path d="M16 13H15V11H16V13Z" fill="currentColor"/>
<path d="M11 15V16H13V15H11Z" fill="currentColor"/>
  </svg>
);

Merge.displayName = "Merge";
export default Merge;
