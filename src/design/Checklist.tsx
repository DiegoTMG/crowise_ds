import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Checklist: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 15.07"
    fill="none"
    {...props}
  >
    <path id="vector" d="M20 3.07H11V5.07H20V3.07ZM20 11.07H11V13.07H20V11.07ZM3.54 7.07L0 3.53L1.41 2.12L3.53 4.24L7.77 0L9.18 1.41L3.54 7.07ZM3.54 15.07L0 11.53L1.41 10.12L3.53 12.24L7.77 8L9.18 9.41L3.54 15.07Z" fill="currentColor"/>
  </svg>
);

Checklist.displayName = "Checklist";
export default Checklist;
