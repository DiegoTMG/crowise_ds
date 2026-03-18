import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BluetoothConnected: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M17.71 7.71L12 2H11V9.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L11 14.41V22H12L17.71 16.29L13.41 12L17.71 7.71ZM7 12L5 10L3 12L5 14L7 12ZM14.88 7.70813L13 5.82812V9.58813L14.88 7.70813ZM14.88 16.29L13 18.17V14.41L14.88 16.29ZM17 12L19 10L21 12L19 14L17 12Z" fill="currentColor"/>
  </svg>
);

BluetoothConnected.displayName = "BluetoothConnected";
export default BluetoothConnected;
