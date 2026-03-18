import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RoadnameOn: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12.5 2V5M7.5 20.5H17H12.5V16M12.5 5H5.5L4 7L5.5 9H12.5M12.5 5V8M12.5 9V8M12.5 9V12M12.5 8H19L21 10L19.5 12H12.5M12.5 12H5L3.5 14L5 16H12.5M12.5 12V16" stroke="#696F88" strokeWidth="2"/>
  </svg>
);

RoadnameOn.displayName = "RoadnameOn";
export default RoadnameOn;
