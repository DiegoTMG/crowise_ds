import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Autorenew: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 22.0022"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M8 8V5C4.69 5 2 7.69 2 11C2 12.01 2.25 12.97 2.7 13.8L1.24 15.26C0.46 14.03 0 12.57 0 11C0 6.58 3.58 3 8 3V0L12 4L8 8ZM13.3 8.20219L14.76 6.74219C15.54 7.97219 16 9.43219 16 11.0022C16 15.4222 12.42 19.0022 8 19.0022V22.0022L4 18.0022L8 14.0022V17.0022C11.31 17.0022 14 14.3122 14 11.0022C14 9.99219 13.74 9.04219 13.3 8.20219Z" fill="currentColor"/>
  </svg>
);

Autorenew.displayName = "Autorenew";
export default Autorenew;
