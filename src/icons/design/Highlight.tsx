import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Highlight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M13.001 2H11.001V5H13.001V2ZM6.001 14L9.001 17V22H15.001V17L18.001 14V9H6.001V14ZM8.001 11H16.001V13.17L13.001 16.17V20H11.001V16.17L8.001 13.17V11ZM3.5032 5.87574L4.9168 4.46094L7.039 6.58134L5.6254 7.99614L3.5032 5.87574ZM19.084 4.46094L16.9612 6.58074L18.3744 7.99594L20.4972 5.87614L19.084 4.46094Z" fill="currentColor"/>
  </svg>
);

Highlight.displayName = "Highlight";
export default Highlight;
