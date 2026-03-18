import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EditField: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M18.313 4.31602L20.083 6.08602L15.103 11.066H13.333V9.29602L18.313 4.31602Z" fill="currentColor"/>
<path d="M21.583 3.87602L20.523 2.81602C20.323 2.61602 20.013 2.61602 19.813 2.81602L18.963 3.66602L20.733 5.43602L21.583 4.58602C21.783 4.38602 21.783 4.06602 21.583 3.87602Z" fill="currentColor"/>
<path d="M5 3H7V5H16.1667L14.2642 7H7V17L17 17V10.8008L19 9V17H21V19H19V21H17V19L7 19V21H5V19H3V17H5V7H3V5L5 5V3Z" fill="currentColor"/>
<path d="M10 9C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V12H12V9H10Z" fill="currentColor"/>
  </svg>
);

EditField.displayName = "EditField";
export default EditField;
