import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayDisabled: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M1.38965 4.21859L2.80965 2.80859L21.1796 21.1886L19.7696 22.5986L12.9896 15.8186L7.99965 18.9986V10.8286L1.38965 4.21859ZM9.99965 12.8286V15.3586L11.5496 14.3786L9.99965 12.8286Z" fill="currentColor"/>
<path d="M19 12L16.45 13.62L8 5.17V5L19 12Z" fill="currentColor"/>
  </svg>
);

PlayDisabled.displayName = "PlayDisabled";
export default PlayDisabled;
