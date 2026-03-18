import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TableRows: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 2H2V22H22V2ZM4 8V4H20V8H4ZM4 14V10H20V14H4ZM4 20V16H20V20H4Z" fill="currentColor"/>
  </svg>
);

TableRows.displayName = "TableRows";
export default TableRows;
