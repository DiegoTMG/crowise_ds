import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DateFrom: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 20"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M2 20C0.9 20 0 19.1 0 18V4C0 2.9 0.9 2 2 2H3V0H5V2H13V0H15V2H16C17.11 2 17.99 2.9 17.99 4L17.9943 9H16V8H2V18H16V17H17.9986L18 18C18 19.1 17.11 20 16 20H2ZM16 4H2V6H16V4Z" fill="currentColor"/>
<path d="M9 12H14.01V9L18 13L14.01 17V14H9V12Z" fill="currentColor"/>
  </svg>
);

DateFrom.displayName = "DateFrom";
export default DateFrom;
