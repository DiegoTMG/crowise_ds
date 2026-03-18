import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DateFrom: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M5 22C3.9 22 3 21.1 3 20V6C3 4.9 3.9 4 5 4H6V2H8V4H16V2H18V4H19C20.11 4 20.99 4.9 20.99 6L20.9943 11H19V10H5V20H19V19H20.9986L21 20C21 21.1 20.11 22 19 22H5ZM19 6H5V8H19V6Z" fill="currentColor"/>
<path d="M12 14H17.01V11L21 15L17.01 19V16H12V14Z" fill="currentColor"/>
  </svg>
);

DateFrom.displayName = "DateFrom";
export default DateFrom;
