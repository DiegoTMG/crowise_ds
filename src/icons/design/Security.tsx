import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Security: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M3 5L12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5ZM19 11.9914H12V3.19141L5 6.30141V12.0014H12V20.9314C15.72 19.7814 18.47 16.1114 19 11.9914Z" fill="currentColor"/>
  </svg>
);

Security.displayName = "Security";
export default Security;
