import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Rotate90DegreesCcw: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 21.14 21.24"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M12.14 3.24C14.44 3.24 16.75 4.12 18.5 5.88C22.02 9.39 22.02 15.09 18.5 18.6C16.75 20.36 14.44 21.24 12.14 21.24C10.65 21.24 9.16 20.86 7.81 20.12L9.3 18.63C10.2 19.03 11.17 19.24 12.14 19.24C13.93 19.24 15.72 18.56 17.09 17.19C19.82 14.46 19.82 10.02 17.09 7.29C15.72 5.92 13.93 5.24 12.14 5.24V8.48L7.9 4.24L12.14 0V3.24ZM6.48 5.64844L0 12.1384L6.49 18.6184L12.98 12.1384L6.48 5.64844ZM2.83 12.14L6.49 8.48L10.14 12.14L6.48 15.8L2.83 12.14Z" fill="currentColor"/>
  </svg>
);

Rotate90DegreesCcw.displayName = "Rotate90DegreesCcw";
export default Rotate90DegreesCcw;
