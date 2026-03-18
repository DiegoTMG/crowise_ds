import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionNorthwest: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M5.3431 5.34317L11.9914 20.4767L12.8158 20.4979L14.8704 14.8705L20.4978 12.8159L20.4767 11.9915L5.3431 5.34317Z" fill="currentColor"/>
  </svg>
);

DirectionNorthwest.displayName = "DirectionNorthwest";
export default DirectionNorthwest;
