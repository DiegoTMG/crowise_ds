import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OrganizerHigher: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 9.17977 18"
    fill="none"
    {...props}
  >
    <path d="M4.59 2.83L7.76 6L9.17 4.59L4.59 0L0 4.59L1.42 6L4.59 2.83Z" fill="currentColor"/>
<path d="M4.58977 15.17L1.41977 12L0.00976562 13.41L4.58977 18L9.17977 13.41L7.75977 12L4.58977 15.17Z" fill="currentColor"/>
  </svg>
);

OrganizerHigher.displayName = "OrganizerHigher";
export default OrganizerHigher;
