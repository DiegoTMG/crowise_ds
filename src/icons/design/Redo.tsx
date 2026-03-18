import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Redo: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18.63 11.1C16.78 9.49 14.38 8.5 11.73 8.5C7.08002 8.5 3.15002 11.53 1.77002 15.72L4.13002 16.5C5.18002 13.31 8.18002 11 11.73 11C13.68 11 15.46 11.72 16.85 12.88L13.23 16.5H22.23V7.5L18.63 11.1Z" fill="currentColor"/>
  </svg>
);

Redo.displayName = "Redo";
export default Redo;
