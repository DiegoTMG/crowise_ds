import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionSoutheast: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18.6568 18.6568L12.0085 3.52325L11.1841 3.50211L9.1295 9.12949L3.50212 11.1841L3.52326 12.0085L18.6568 18.6568Z" fill="currentColor"/>
  </svg>
);

DirectionSoutheast.displayName = "DirectionSoutheast";
export default DirectionSoutheast;
