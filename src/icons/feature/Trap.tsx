import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Trap: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 1L20 9.68421L12 23L4 9.68421L12 1ZM12 3.88027L6.42182 9.93553L12 19.2203L17.5782 9.93553L12 3.88027Z" fill="currentColor"/>
  </svg>
);

Trap.displayName = "Trap";
export default Trap;
