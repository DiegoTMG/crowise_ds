import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DateTo: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 20"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M16 20C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.01 2.9 0.01 4L0.00571429 9H2V8H16V18H2V17H0.00142857L0 18C0 19.1 0.89 20 2 20H16ZM2 4H16V6H2V4Z" fill="currentColor"/>
<path d="M0 12H5.01V9L9 13L5.01 17V14H0V12Z" fill="currentColor"/>
  </svg>
);

DateTo.displayName = "DateTo";
export default DateTo;
