import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Mapoptions: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path id="vector" d="M1.4 20L0 18.6L6.6 12H2V10H10V18H8V13.4L1.4 20ZM10 10V2H12V6.6L18.6 0L20 1.4L13.4 8H18V10H10Z" fill="currentColor"/>
  </svg>
);

Mapoptions.displayName = "Mapoptions";
export default Mapoptions;
