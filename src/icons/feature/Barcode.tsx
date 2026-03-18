import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Barcode: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M1 19V5H3V19H1ZM4 19V5H6V19H4ZM7 19V5H8V19H7ZM10 19V5H12V19H10ZM13 19V5H16V19H13ZM17 19V5H18V19H17ZM20 19V5H23V19H20Z" fill="currentColor"/>
  </svg>
);

Barcode.displayName = "Barcode";
export default Barcode;
