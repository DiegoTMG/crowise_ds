import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TrapMonitoring: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M9.5 5.25C10.6 5.25 11.5 4.35 11.5 3.25C11.5 2.15 10.6 1.25 9.5 1.25C8.4 1.25 7.5 2.15 7.5 3.25C7.5 4.35 8.4 5.25 9.5 5.25Z" fill="currentColor"/>
<path d="M5.75 8.65L3 22.75H5.1L6.85 14.75L9 16.75V22.75H11V15.2L8.95 13.15L9.55 10.15C10.85 11.75 12.8 12.75 15 12.75V10.75C13.15 10.75 11.55 9.75 10.65 8.3L9.7 6.7C9.35 6.1 8.7 5.75 8 5.75C7.75 5.75 7.5 5.8 7.25 5.9L2 8.05V12.75H4V9.4L5.75 8.65Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.75 1.25L15.5 4.70395L18.75 10L22 4.70395L18.75 1.25ZM18.75 2.70926L16.7522 4.83248L18.75 8.08808L20.7478 4.83248L18.75 2.70926Z" fill="currentColor"/>
  </svg>
);

TrapMonitoring.displayName = "TrapMonitoring";
export default TrapMonitoring;
