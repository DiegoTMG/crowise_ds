import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Trap: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 22"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M8 0L16 8.68421L8 22L0 8.68421L8 0ZM8 2.88027L2.42182 8.93553L8 18.2203L13.5782 8.93553L8 2.88027Z" fill="currentColor"/>
  </svg>
);

Trap.displayName = "Trap";
export default Trap;
