import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DownloadPdf: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6ZM14 16V13C14 12.45 13.55 12 13 12H11V17H13C13.55 17 14 16.55 14 16ZM12 13H13V16H12V13ZM16 15H17V14H16V13H17V12H15V17H16V15ZM8 15H9C9.55 15 10 14.55 10 14V13C10 12.45 9.55 12 9 12H7V17H8V15ZM8 13H9V14H8V13Z" fill="currentColor"/>
  </svg>
);

DownloadPdf.displayName = "DownloadPdf";
export default DownloadPdf;
