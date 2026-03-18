import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ManagementZone: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M5 3H7V5L17 5V3H19V5L21 5V7H19V17H21V19H19V21H17V19L7 19V21H5V19H3V17H5V7H3V5L5 5V3ZM7 17V7L17 7V17L7 17Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.5 6.5V6H12.5V6.5H11.5ZM11.5 8.5V7.5H12.5V8.5H11.5ZM11.5 10.5V9.5H12.5V10.5H11.5ZM11.5 12.5V11.5H12.5V12.5H11.5ZM11.5 14.5V13.5H12.5V14.5H11.5ZM11.5 16.5V15.5H12.5V16.5H11.5ZM11.5 18V17.5H12.5V18H11.5Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M17.5 11.5H18V12.5H17.5V11.5ZM15.5 11.5H16.5V12.5H15.5V11.5ZM13.5 11.5H14.5V12.5H13.5V11.5ZM11.5 11.5H12.5V12.5H11.5V11.5ZM9.5 11.5H10.5V12.5H9.5V11.5ZM7.5 11.5H8.5V12.5H7.5V11.5ZM6 11.5H6.5V12.5H6V11.5Z" fill="currentColor"/>
  </svg>
);

ManagementZone.displayName = "ManagementZone";
export default ManagementZone;
