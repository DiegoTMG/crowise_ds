import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RotateRight: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M11.035 2.535L15.585 7.085L11.035 11.535V7.625C8.195 8.105 6.035 10.565 6.035 13.535C6.035 16.505 8.195 18.965 11.035 19.445V21.465C7.085 20.975 4.035 17.615 4.035 13.535C4.035 9.455 7.095 6.095 11.035 5.605V2.535ZM18.345 8.645C19.245 9.805 19.795 11.145 19.965 12.535H17.945C17.805 11.665 17.465 10.815 16.925 10.065L18.345 8.645ZM13.035 19.4361V21.4561C14.425 21.2861 15.775 20.7461 16.935 19.8461L15.495 18.4061C14.745 18.9461 13.905 19.2961 13.035 19.4361ZM18.345 18.425L16.925 17.015C17.465 16.255 17.805 15.405 17.945 14.535H19.965C19.795 15.925 19.245 17.265 18.345 18.425Z" fill="currentColor"/>
  </svg>
);

RotateRight.displayName = "RotateRight";
export default RotateRight;
