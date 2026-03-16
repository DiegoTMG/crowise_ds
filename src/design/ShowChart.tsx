import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShowChart: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 12.98"
    fill="none"
    {...props}
  >
    <path id="vector" d="M1.5 12.98L7.5 6.97L11.5 10.97L20 1.41L18.59 0L11.5 7.97L7.5 3.97L0 11.48L1.5 12.98Z" fill="currentColor"/>
  </svg>
);

ShowChart.displayName = "ShowChart";
export default ShowChart;
