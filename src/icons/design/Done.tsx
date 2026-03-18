import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Done: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M8.8002 15.9008L4.6002 11.7008L3.2002 13.1008L8.8002 18.7008L20.8002 6.70078L19.4002 5.30078L8.8002 15.9008Z" fill="currentColor"/>
  </svg>
);

Done.displayName = "Done";
export default Done;
