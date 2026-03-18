import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowForwardIos: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M6.16504 20.1316L7.93504 21.9016L17.835 12.0016L7.93504 2.10156L6.16504 3.87156L14.295 12.0016L6.16504 20.1316Z" fill="currentColor"/>
  </svg>
);

ArrowForwardIos.displayName = "ArrowForwardIos";
export default ArrowForwardIos;
