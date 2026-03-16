import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BluetoothConnected: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M14.71 5.71L9 0H8V7.59L3.41 3L2 4.41L7.59 10L2 15.59L3.41 17L8 12.41V20H9L14.71 14.29L10.41 10L14.71 5.71ZM4 10L2 8L0 10L2 12L4 10ZM11.88 5.70813L10 3.82812V7.58813L11.88 5.70813ZM11.88 14.29L10 16.17V12.41L11.88 14.29ZM14 10L16 8L18 10L16 12L14 10Z" fill="currentColor"/>
  </svg>
);

BluetoothConnected.displayName = "BluetoothConnected";
export default BluetoothConnected;
