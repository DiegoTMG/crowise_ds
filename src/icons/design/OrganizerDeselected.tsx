import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OrganizerDeselected: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M15.17 9L12 5.83L8.83003 9L7.41003 7.59L12 3L16.58 7.59L15.17 9ZM8.83003 15L12 18.17L15.17 15L16.59 16.41L12 21L7.42003 16.41L8.83003 15Z" fill="#C2C7D0"/>
  </svg>
);

OrganizerDeselected.displayName = "OrganizerDeselected";
export default OrganizerDeselected;
