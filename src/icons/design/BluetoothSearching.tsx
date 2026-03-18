import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BluetoothSearching: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M9.995 2L15.705 7.71L11.405 12L15.705 16.29L9.995 22H8.995V14.41L4.405 19L2.995 17.59L8.585 12L2.995 6.41L4.405 5L8.995 9.59V2H9.995ZM19.525 6.71L18.265 7.97C18.895 9.18 19.245 10.54 19.245 11.99C19.245 13.44 18.885 14.81 18.265 16.01L19.465 17.21C20.435 15.67 21.005 13.85 21.005 11.9C20.995 10.01 20.455 8.23 19.525 6.71ZM14.2352 12.0114L16.5552 14.3314C16.8352 13.6114 16.9952 12.8214 16.9952 12.0014C16.9952 11.1814 16.8352 10.4114 16.5652 9.69141L14.2352 12.0114ZM10.995 5.82812L12.875 7.70813L10.995 9.58813V5.82812ZM10.995 18.17L12.875 16.29L10.995 14.41V18.17Z" fill="currentColor"/>
  </svg>
);

BluetoothSearching.displayName = "BluetoothSearching";
export default BluetoothSearching;
