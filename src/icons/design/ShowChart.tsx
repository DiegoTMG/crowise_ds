import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShowChart: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3.5 18.4917L9.5 12.4817L13.5 16.4817L22 6.92172L20.59 5.51172L13.5 13.4817L9.5 9.48172L2 16.9917L3.5 18.4917Z" fill="currentColor"/>
  </svg>
);

ShowChart.displayName = "ShowChart";
export default ShowChart;
