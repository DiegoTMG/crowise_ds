import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CloudOff: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M4.41 2.93L3 4.34L5.77 7.11H5.35C2.34 7.43 0 9.98 0 13.07C0 16.38 2.69 19.07 6 19.07H17.73L19.73 21.07L21.14 19.66L4.41 2.93ZM24 14.07C24 11.43 21.95 9.29 19.35 9.11C18.67 5.66 15.64 3.07 12 3.07C10.67 3.07 9.43 3.43 8.35 4.04L9.84 5.53C10.51 5.24 11.23 5.07 12 5.07C15.04 5.07 17.5 7.53 17.5 10.57V11.07H19C20.66 11.07 22 12.41 22 14.07C22 15.06 21.52 15.92 20.79 16.47L22.2 17.88C23.29 16.96 24 15.61 24 14.07ZM2 13.07C2 15.28 3.79 17.07 6 17.07H15.73L7.73 9.07H6C3.79 9.07 2 10.86 2 13.07Z" fill="currentColor"/>
  </svg>
);

CloudOff.displayName = "CloudOff";
export default CloudOff;
