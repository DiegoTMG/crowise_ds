import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Bluetooth: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12.71 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M12.71 5.71L7 0H6V7.59L1.41 3L0 4.41L5.59 10L0 15.59L1.41 17L6 12.41V20H7L12.71 14.29L8.41 10L12.71 5.71ZM8 3.82812L9.88 5.70813L8 7.58813V3.82812ZM8 16.17L9.88 14.29L8 12.41V16.17Z" fill="currentColor"/>
  </svg>
);

Bluetooth.displayName = "Bluetooth";
export default Bluetooth;
