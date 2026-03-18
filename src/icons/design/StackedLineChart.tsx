import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StackedLineChart: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M2 19.9917L9.5 12.4817L13.5 16.4817L20.59 8.51172L22 9.92172L13.5 19.4817L9.5 15.4817L3.5 21.4917L2 19.9917ZM3.5 15.4917L9.5 9.48172L13.5 13.4817L22 3.92172L20.59 2.51172L13.5 10.4817L9.5 6.48172L2 13.9917L3.5 15.4917Z" fill="currentColor"/>
  </svg>
);

StackedLineChart.displayName = "StackedLineChart";
export default StackedLineChart;
