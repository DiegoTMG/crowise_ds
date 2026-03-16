import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BarChart: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M5.6 0H8.4V14H5.6V0ZM0 4.2H3V14H0V4.2ZM14 8H11.2V14H14V8Z" fill="currentColor"/>
  </svg>
);

BarChart.displayName = "BarChart";
export default BarChart;
