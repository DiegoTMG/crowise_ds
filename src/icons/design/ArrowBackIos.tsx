import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowBackIos: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17.835 3.87156L16.055 2.10156L6.16504 12.0016L16.065 21.9016L17.835 20.1316L9.70504 12.0016L17.835 3.87156Z" fill="currentColor"/>
  </svg>
);

ArrowBackIos.displayName = "ArrowBackIos";
export default ArrowBackIos;
