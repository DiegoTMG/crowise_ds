import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionNortheast: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18.6568 5.3431L3.52325 11.9914L3.50211 12.8158L9.12949 14.8704L11.1841 20.4978L12.0085 20.4767L18.6568 5.3431Z" fill="currentColor"/>
  </svg>
);

DirectionNortheast.displayName = "DirectionNortheast";
export default DirectionNortheast;
