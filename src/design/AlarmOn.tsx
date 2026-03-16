import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlarmOn: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19.8876 20.1895"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M5.8885 1.5358L4.6073 0L0 3.8436L1.2811 5.3794L5.8885 1.5358ZM15.2802 0L19.8876 3.8436L18.6064 5.3794L13.999 1.5358L15.2802 0ZM8.48395 12.7195L6.35395 10.5895L5.29395 11.6495L8.47395 14.8295L14.4739 8.82953L13.4139 7.76953L8.48395 12.7195ZM9.94434 2.18945C4.97434 2.18945 0.944336 6.21945 0.944336 11.1895C0.944336 16.1595 4.97434 20.1895 9.94434 20.1895C14.9143 20.1895 18.9443 16.1595 18.9443 11.1895C18.9443 6.21945 14.9143 2.18945 9.94434 2.18945ZM2.94434 11.1895C2.94434 15.0495 6.08434 18.1895 9.94434 18.1895C13.8043 18.1895 16.9443 15.0495 16.9443 11.1895C16.9443 7.32945 13.8043 4.18945 9.94434 4.18945C6.08434 4.18945 2.94434 7.32945 2.94434 11.1895Z" fill="currentColor"/>
  </svg>
);

AlarmOn.displayName = "AlarmOn";
export default AlarmOn;
