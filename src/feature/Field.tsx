import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Field: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path id="icon/maps/area_24px" fillRule="evenodd" clipRule="evenodd" d="M2 0H4V2L14 2V0H16V2L18 2V4H16V14H18V16H16V18H14V16L4 16V18H2V16H0V14H2V4H0V2L2 2V0ZM4 14V4L14 4V14L4 14Z" fill="currentColor"/>
  </svg>
);

Field.displayName = "Field";
export default Field;
