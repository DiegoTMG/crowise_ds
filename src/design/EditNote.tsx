import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EditNote: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18.1325 15"
    fill="none"
    {...props}
  >
    <path id="vector" d="M0 4H11V6H0V4ZM0 2H11V0H0V2ZM0 10H7V8H0V10ZM15.01 6.87L15.72 6.16C16.11 5.77 16.74 5.77 17.13 6.16L17.84 6.87C18.23 7.26 18.23 7.89 17.84 8.28L17.13 8.99L15.01 6.87ZM14.3 7.58L9 12.88V15H11.12L16.42 9.7L14.3 7.58Z" fill="currentColor"/>
  </svg>
);

EditNote.displayName = "EditNote";
export default EditNote;
