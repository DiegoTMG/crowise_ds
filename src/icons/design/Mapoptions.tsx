import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Mapoptions: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M21 18.62C21 18.85 20.85 19.03 20.64 19.1L15 21L9 18.9L3.66 20.97L3.5 21C3.22 21 3 20.78 3 20.5V5.38C3 5.15 3.15 4.97 3.36 4.9L9 3L15 5.1L20.34 3.03L20.5 3C20.78 3 21 3.22 21 3.5V18.62ZM19 17.542L15.0124 18.8854L8.96469 16.7687L5 18.3056V6.45796L8.98759 5.11462L15.0353 7.23132L19 5.69445V17.542Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8 10C7.17157 10 6.5 10.6716 6.5 11.5C6.5 12.3284 7.17157 13 8 13C8.82843 13 9.5 12.3284 9.5 11.5C9.5 10.6716 8.82843 10 8 10ZM12 10C11.1716 10 10.5 10.6716 10.5 11.5C10.5 12.3284 11.1716 13 12 13C12.8284 13 13.5 12.3284 13.5 11.5C13.5 10.6716 12.8284 10 12 10ZM14.5 11.5C14.5 10.6716 15.1716 10 16 10C16.8284 10 17.5 10.6716 17.5 11.5C17.5 12.3284 16.8284 13 16 13C15.1716 13 14.5 12.3284 14.5 11.5Z" fill="currentColor"/>
  </svg>
);

Mapoptions.displayName = "Mapoptions";
export default Mapoptions;
