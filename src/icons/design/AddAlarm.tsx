import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddAlarm: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M7.88 3.46L6.6 1.93L2 5.78L3.29 7.31L7.88 3.46ZM22 5.79L17.4 1.93L16.11 3.46L20.71 7.32L22 5.79ZM3 13.07C3 8.1 7.03 4.07 12 4.07C16.97 4.07 21 8.1 21 13.07C21 18.04 16.97 22.07 12 22.07C7.02 22.07 3 18.04 3 13.07ZM12 20.07C8.13 20.07 5 16.94 5 13.07C5 9.2 8.13 6.07 12 6.07C15.87 6.07 19 9.2 19 13.07C19 16.94 15.87 20.07 12 20.07ZM11 12.07V9.07H13V12.07H16V14.07H13V17.07H11V14.07H8V12.07H11Z" fill="currentColor"/>
  </svg>
);

AddAlarm.displayName = "AddAlarm";
export default AddAlarm;
