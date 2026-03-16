import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DownloadXls: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M10 0H2C0.9 0 0.01 0.9 0.01 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM2 18V2H9V7H14V18H2ZM5 10L4.5 11.25L4 10H3L4 12.5L3 15H4L4.5 13.75L5 15H6L5 12.5L6 10H5ZM11 10C10.4477 10 10 10.4477 10 11V13H12V14H10V15H12C12.5523 15 13 14.5523 13 14V12H11V11H13V10H11ZM7 14V10H8V14H9V15H8C7.44772 15 7 14.5523 7 14Z" fill="currentColor"/>
  </svg>
);

DownloadXls.displayName = "DownloadXls";
export default DownloadXls;
