import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatColorReset: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 17.9314"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M8 3.16C9.53 5.16 11.08 7.59 11.71 9.4L13.94 11.63C13.97 11.36 14 11.08 14 10.8C14 6.82 8 0 8 0C8 0 6.82 1.35 5.5 3.19L6.94 4.63C7.28 4.12 7.64 3.63 8 3.16ZM1.41 1.94141L0 3.35141L3.32 6.67141C2.55 8.13141 2 9.59141 2 10.8014C2 14.1114 4.69 16.8014 8 16.8014C9.52 16.8014 10.9 16.2314 11.95 15.3014L14.58 17.9314L16 16.5214L1.41 1.94141ZM4 10.8C4 13.01 5.79 14.8 8 14.8C8.96 14.8 9.83 14.44 10.53 13.88L4.81 8.16C4.32 9.18 4 10.11 4 10.8Z" fill="currentColor"/>
  </svg>
);

FormatColorReset.displayName = "FormatColorReset";
export default FormatColorReset;
