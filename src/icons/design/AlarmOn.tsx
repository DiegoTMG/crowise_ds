import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlarmOn: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M7.94416 3.4401L6.66296 1.9043L2.05566 5.7479L3.33676 7.2837L7.94416 3.4401ZM17.3359 1.9043L21.9433 5.7479L20.6621 7.2837L16.0547 3.4401L17.3359 1.9043ZM10.5396 14.6238L8.40961 12.4938L7.34961 13.5538L10.5296 16.7338L16.5296 10.7338L15.4696 9.67383L10.5396 14.6238ZM12 4.09375C7.03 4.09375 3 8.12375 3 13.0938C3 18.0637 7.03 22.0938 12 22.0938C16.97 22.0938 21 18.0637 21 13.0938C21 8.12375 16.97 4.09375 12 4.09375ZM5 13.0938C5 16.9537 8.14 20.0938 12 20.0938C15.86 20.0938 19 16.9537 19 13.0938C19 9.23375 15.86 6.09375 12 6.09375C8.14 6.09375 5 9.23375 5 13.0938Z" fill="currentColor"/>
  </svg>
);

AlarmOn.displayName = "AlarmOn";
export default AlarmOn;
