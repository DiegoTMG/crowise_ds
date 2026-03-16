import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsBluetooth: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12.71 24"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M7 0L12.71 5.71L8.41 10L12.71 14.29L7 20H6V12.41L1.41 17L0 15.59L5.59 10L0 4.41L1.41 3L6 7.59V0H7ZM4 24H2V22H4V24ZM8 22V24H6V22H8ZM10 24H12V22H10V24ZM8 3.82812L9.88 5.70813L8 7.58813V3.82812ZM8 16.1702L9.88 14.2902L8 12.4102V16.1702Z" fill="currentColor"/>
  </svg>
);

SettingsBluetooth.displayName = "SettingsBluetooth";
export default SettingsBluetooth;
