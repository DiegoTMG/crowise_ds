import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BarChart: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M10.6 5H13.4V19H10.6V5ZM5 9.2H8V19H5V9.2ZM19 13H16.2V19H19V13Z" fill="currentColor"/>
  </svg>
);

BarChart.displayName = "BarChart";
export default BarChart;
