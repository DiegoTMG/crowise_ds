import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoneAll: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M22.205 5.29688L11.625 15.8769L7.445 11.7069L6.035 13.1169L11.625 18.7069L23.625 6.70687L22.205 5.29688ZM17.965 6.70687L16.555 5.29688L10.215 11.6369L11.625 13.0469L17.965 6.70687ZM5.965 18.707L0.375 13.117L1.795 11.707L7.375 17.297L5.965 18.707Z" fill="currentColor"/>
  </svg>
);

DoneAll.displayName = "DoneAll";
export default DoneAll;
