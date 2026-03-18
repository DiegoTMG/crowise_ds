import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RotateLeft: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12.965 2.535V5.605C16.915 6.095 19.965 9.455 19.965 13.535C19.965 17.615 16.915 20.975 12.965 21.465V19.445C15.805 18.965 17.965 16.505 17.965 13.535C17.965 10.565 15.805 8.105 12.965 7.625V11.535L8.415 7.085L12.965 2.535ZM5.665 8.645L7.075 10.065C6.545 10.815 6.195 11.665 6.055 12.535H4.035C4.205 11.145 4.765 9.805 5.665 8.645ZM4.035 14.535H6.055C6.195 15.415 6.545 16.255 7.065 17.005L5.655 18.425C4.755 17.265 4.205 15.925 4.035 14.535ZM7.06528 19.8561C8.22528 20.7561 9.57528 21.2961 10.9653 21.4661V19.4361C10.0953 19.2861 9.25528 18.9461 8.50528 18.4061L7.06528 19.8561Z" fill="currentColor"/>
  </svg>
);

RotateLeft.displayName = "RotateLeft";
export default RotateLeft;
