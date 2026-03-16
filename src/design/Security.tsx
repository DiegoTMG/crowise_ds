import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Security: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 22"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M0 4L9 0L18 4V10C18 15.55 14.16 20.74 9 22C3.84 20.74 0 15.55 0 10V4ZM16 10.9914H9V2.19141L2 5.30141V11.0014H9V19.9314C12.72 18.7814 15.47 15.1114 16 10.9914Z" fill="currentColor"/>
  </svg>
);

Security.displayName = "Security";
export default Security;
