import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BluetoothDisabled: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M9 3.83L10.88 5.71L9.28 7.31L10.69 8.72L13.71 5.7L8 0H7V5.03L9 7.03V3.83ZM1.41 2L0 3.41L6.59 10L1 15.59L2.41 17L7 12.41V20H8L12.29 15.71L14.59 18L16 16.59L1.41 2ZM10.88 14.29L9 12.41V16.17L10.88 14.29Z" fill="currentColor"/>
  </svg>
);

BluetoothDisabled.displayName = "BluetoothDisabled";
export default BluetoothDisabled;
