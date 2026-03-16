import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RotateLeft: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 15.93 18.9311"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M8.93 0V3.07C12.88 3.56 15.93 6.92 15.93 11C15.93 15.08 12.88 18.44 8.93 18.93V16.91C11.77 16.43 13.93 13.97 13.93 11C13.93 8.03 11.77 5.57 8.93 5.09V9L4.38 4.55L8.93 0ZM1.63 6.11L3.04 7.53C2.51 8.28 2.16 9.13 2.02 10H0C0.17 8.61 0.73 7.27 1.63 6.11ZM0 12H2.02C2.16 12.88 2.51 13.72 3.03 14.47L1.62 15.89C0.72 14.73 0.17 13.39 0 12ZM3.03027 17.3211C4.19027 18.2211 5.54027 18.7611 6.93027 18.9311V16.9011C6.06027 16.7511 5.22027 16.4111 4.47027 15.8711L3.03027 17.3211Z" fill="currentColor"/>
  </svg>
);

RotateLeft.displayName = "RotateLeft";
export default RotateLeft;
