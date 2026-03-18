import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddReport: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6 2H14L20 8V16H18V9H13V4H6V20H14V22H5.99C4.89 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" fill="currentColor"/>
<path d="M16 16V18H8V16H16Z" fill="currentColor"/>
<path d="M8 12H16V14H8V12Z" fill="currentColor"/>
<path d="M20 18H18V20H16V22H18V24H20V22H22V20H20V18Z" fill="currentColor"/>
  </svg>
);

AddReport.displayName = "AddReport";
export default AddReport;
