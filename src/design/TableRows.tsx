import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TableRows: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path id="vector" d="M20 0H0V20H20V0ZM2 6V2H18V6H2ZM2 12V8H18V12H2ZM2 18V14H18V18H2Z" fill="currentColor"/>
  </svg>
);

TableRows.displayName = "TableRows";
export default TableRows;
