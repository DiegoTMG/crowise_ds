import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CuttingMale: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M23 21.75L21.5 23.25L14.5 16.25L13.5 16.75V23.25H11.5V20.75L6.5 18.25L2 19.25L1 18.25L6.5 10.75L11.5 17.25V13.75L3 5.25L4.5 3.75L23 21.75ZM4.5 16.75L6.5 16.25L9 17.25L6.5 14.25L4.5 16.75Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M23 14.25L22 15.75L18.5 14.25L16 11.75L19 8.75L23 14.25ZM17.5 12.75H19.5L20.5 13.25L19 11.25L17.5 12.75Z" fill="currentColor"/>
<path d="M13.5 3.75L15.5 1.25L17 2.75L13.5 7.25V9.75L11.5 7.75V7.25L8 2.25L9.5 1.25L11.5 3.75V0.75H13.5V3.75Z" fill="currentColor"/>
  </svg>
);

CuttingMale.displayName = "CuttingMale";
export default CuttingMale;
