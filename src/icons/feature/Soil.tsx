import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Soil: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 5H2V7H22V5Z" fill="currentColor"/>
<path d="M4 13H2V15H4V13Z" fill="currentColor"/>
<path d="M4 9H6V11H4V9Z" fill="currentColor"/>
<path d="M6 17H4V19H6V17Z" fill="currentColor"/>
<path d="M10 13H12V15H10V13Z" fill="currentColor"/>
<path d="M14 9H12V11H14V9Z" fill="currentColor"/>
<path d="M12 17H14V19H12V17Z" fill="currentColor"/>
<path d="M20 13H18V15H20V13Z" fill="currentColor"/>
<path d="M20 9H22V11H20V9Z" fill="currentColor"/>
<path d="M22 17H20V19H22V17Z" fill="currentColor"/>
<path d="M6 13H8V15H6V13Z" fill="currentColor"/>
<path d="M10 9H8V11H10V9Z" fill="currentColor"/>
<path d="M8 17H10V19H8V17Z" fill="currentColor"/>
<path d="M16 13H14V15H16V13Z" fill="currentColor"/>
<path d="M16 9H18V11H16V9Z" fill="currentColor"/>
<path d="M18 17H16V19H18V17Z" fill="currentColor"/>
  </svg>
);

Soil.displayName = "Soil";
export default Soil;
