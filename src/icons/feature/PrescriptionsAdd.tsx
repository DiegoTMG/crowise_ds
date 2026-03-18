import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PrescriptionsAdd: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M14.82 4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C4.86 22 4.73 21.99 4.6 21.97C4.21 21.89 3.86 21.69 3.59 21.42C3.41 21.23 3.26 21.02 3.16 20.78C3.06 20.54 3 20.27 3 20V6C3 5.72 3.06 5.46 3.16 5.23C3.26 4.99 3.41 4.77 3.59 4.59C3.86 4.32 4.21 4.12 4.6 4.04C4.73 4.01 4.86 4 5 4H9.18C9.6 2.84 10.7 2 12 2C13.3 2 14.4 2.84 14.82 4ZM12.75 4.5C12.75 4.09 12.41 3.75 12 3.75C11.59 3.75 11.25 4.09 11.25 4.5C11.25 4.91 11.59 5.25 12 5.25C12.41 5.25 12.75 4.91 12.75 4.5ZM5 20V6H19V20H5ZM11 12.333V9.33301H13V12.333H16V14.333H13V17.333H11V14.333H8V12.333H11Z" fill="currentColor"/>
  </svg>
);

PrescriptionsAdd.displayName = "PrescriptionsAdd";
export default PrescriptionsAdd;
