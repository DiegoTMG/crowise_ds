import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TableChart: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 19 18"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M17 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H17C18.1 18 19 17.1 19 16V2C19 0.9 18.1 0 17 0ZM17 2V5H2V2H17ZM7 16H12V7H7V16ZM2 7H5V16H2V7ZM14 7V16H17V7H14Z" fill="currentColor"/>
  </svg>
);

TableChart.displayName = "TableChart";
export default TableChart;
