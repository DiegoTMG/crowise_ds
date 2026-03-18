import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Bluetooth: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M18.355 7.71L12.645 2H11.645V9.59L7.05502 5L5.64502 6.41L11.235 12L5.64502 17.59L7.05502 19L11.645 14.41V22H12.645L18.355 16.29L14.055 12L18.355 7.71ZM13.645 5.82812L15.525 7.70813L13.645 9.58813V5.82812ZM13.645 18.17L15.525 16.29L13.645 14.41V18.17Z" fill="currentColor"/>
  </svg>
);

Bluetooth.displayName = "Bluetooth";
export default Bluetooth;
