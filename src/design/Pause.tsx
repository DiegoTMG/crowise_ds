import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Pause: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 14"
    fill="none"
    {...props}
  >
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M4 14H0V0H4V14ZM8 14V0H12V14H8Z" fill="currentColor"/>
  </svg>
);

Pause.displayName = "Pause";
export default Pause;
