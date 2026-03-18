import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsBluetooth: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12.6445 0L18.3545 5.71L14.0545 10L18.3545 14.29L12.6445 20H11.6445V12.41L7.05453 17L5.64453 15.59L11.2345 10L5.64453 4.41L7.05453 3L11.6445 7.59V0H12.6445ZM9.64453 24H7.64453V22H9.64453V24ZM13.6445 22V24H11.6445V22H13.6445ZM15.6445 24H17.6445V22H15.6445V24ZM13.6445 3.82812L15.5245 5.70813L13.6445 7.58813V3.82812ZM13.6445 16.1702L15.5245 14.2902L13.6445 12.4102V16.1702Z" fill="currentColor"/>
  </svg>
);

SettingsBluetooth.displayName = "SettingsBluetooth";
export default SettingsBluetooth;
