import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ChecklistRtl: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 15.07"
    fill="none"
    {...props}
  >
    <path id="vector" d="M9 3.07H0V5.07H9V3.07ZM9 11.07H0V13.07H9V11.07ZM14.34 7.07L10.8 3.53L12.21 2.12L14.33 4.24L18.57 0L20 1.41L14.34 7.07ZM14.34 15.07L10.8 11.53L12.21 10.12L14.33 12.24L18.57 8L20 9.41L14.34 15.07Z" fill="currentColor"/>
  </svg>
);

ChecklistRtl.displayName = "ChecklistRtl";
export default ChecklistRtl;
