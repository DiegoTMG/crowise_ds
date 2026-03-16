import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Play: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 11 14"
    fill="none"
    {...props}
  >
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M11 7L0 14V0L11 7ZM7.27 7.00062L2 3.64062V10.3606L7.27 7.00062Z" fill="currentColor"/>
  </svg>
);

Play.displayName = "Play";
export default Play;
