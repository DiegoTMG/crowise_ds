import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DownloadPdf: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 20"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M10 0H2C0.9 0 0.01 0.9 0.01 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM2 18V2H9V7H14V18H2ZM10 14V11C10 10.45 9.55 10 9 10H7V15H9C9.55 15 10 14.55 10 14ZM8 11H9V14H8V11ZM12 13H13V12H12V11H13V10H11V15H12V13ZM4 13H5C5.55 13 6 12.55 6 12V11C6 10.45 5.55 10 5 10H3V15H4V13ZM4 11H5V12H4V11Z" fill="currentColor"/>
  </svg>
);

DownloadPdf.displayName = "DownloadPdf";
export default DownloadPdf;
