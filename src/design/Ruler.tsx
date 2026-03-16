import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Ruler: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 12"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M2 0H20C21.1 0 22 0.9 22 2V10C22 11.1 21.1 12 20 12H2C0.9 12 0 11.1 0 10V2C0 0.9 0.9 0 2 0ZM2 10H20V2H18V6H16V2H14V6H12V2H10V6H8V2H6V6H4V2H2V10Z" fill="currentColor"/>
  </svg>
);

Ruler.displayName = "Ruler";
export default Ruler;
