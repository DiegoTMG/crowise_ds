import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MultilineChart: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M22 7.17391L20.59 5.76391L17.74 8.97391C15.68 6.65391 12.83 5.25391 9.61 5.25391C6.72 5.25391 4.07 6.41391 2 8.25391L3.42 9.67391C5.12 8.18391 7.27 7.25391 9.61 7.25391C12.35 7.25391 14.7 8.51391 16.38 10.4939L13.5 13.7339L9.5 9.73391L2 17.2439L3.5 18.7439L9.5 12.7339L13.5 16.7339L17.55 12.1839C18.3 13.5339 18.8 15.0839 18.99 16.7339H21C20.78 14.4339 20.05 12.3439 18.96 10.5939L22 7.17391Z" fill="currentColor"/>
  </svg>
);

MultilineChart.displayName = "MultilineChart";
export default MultilineChart;
