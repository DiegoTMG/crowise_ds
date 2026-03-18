import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Play: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M19 12L8 19V5L19 12ZM15.27 12.0006L10 8.64062V15.3606L15.27 12.0006Z" fill="currentColor"/>
  </svg>
);

Play.displayName = "Play";
export default Play;
