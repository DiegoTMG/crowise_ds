import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AccessAlarm: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M7.88 3.46L6.6 1.93L2 5.78L3.29 7.31L7.88 3.46ZM22 5.79L17.4 1.93L16.11 3.46L20.71 7.32L22 5.79ZM11 8.07H12.5V13.32L16.5 15.69L15.75 16.92L11 14.07V8.07ZM12 4.07C7.03 4.07 3 8.1 3 13.07C3 18.04 7.02 22.07 12 22.07C16.97 22.07 21 18.04 21 13.07C21 8.1 16.97 4.07 12 4.07ZM5 13.07C5 16.94 8.13 20.07 12 20.07C15.87 20.07 19 16.94 19 13.07C19 9.2 15.87 6.07 12 6.07C8.13 6.07 5 9.2 5 13.07Z" fill="currentColor"/>
  </svg>
);

AccessAlarm.displayName = "AccessAlarm";
export default AccessAlarm;
