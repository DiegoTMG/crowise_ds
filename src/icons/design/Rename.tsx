import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Rename: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M23 7C23 5.9 22.1 5 21 5H16V3H18V1H12V3H14V5H3C1.9 5 1 5.9 1 7V17C1 18.1 1.9 19 3 19H14V21H12V23H18V21H16V19H21C22.1 19 22.99 18.1 22.99 17L23 7ZM3 7V17H14V7H3ZM21 7V17H16V7H21Z" fill="currentColor"/>
  </svg>
);

Rename.displayName = "Rename";
export default Rename;
