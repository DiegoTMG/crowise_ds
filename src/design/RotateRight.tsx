import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RotateRight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 15.93 18.93"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M7 0L11.55 4.55L7 9V5.09C4.16 5.57 2 8.03 2 11C2 13.97 4.16 16.43 7 16.91V18.93C3.05 18.44 0 15.08 0 11C0 6.92 3.06 3.56 7 3.07V0ZM14.31 6.11C15.21 7.27 15.76 8.61 15.93 10H13.91C13.77 9.13 13.43 8.28 12.89 7.53L14.31 6.11ZM9 16.9011V18.9211C10.39 18.7511 11.74 18.2111 12.9 17.3111L11.46 15.8711C10.71 16.4111 9.87 16.7611 9 16.9011ZM14.31 15.89L12.89 14.48C13.43 13.72 13.77 12.87 13.91 12H15.93C15.76 13.39 15.21 14.73 14.31 15.89Z" fill="currentColor"/>
  </svg>
);

RotateRight.displayName = "RotateRight";
export default RotateRight;
