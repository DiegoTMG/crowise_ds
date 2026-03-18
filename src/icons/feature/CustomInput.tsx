import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CustomInput: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 11L11 2L16.5 11H5.5ZM12.95 9L11 5.85L9.05 9H12.95Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M2 21.5V13.5H10V21.5H2ZM4 19.5H8V15.5H4V19.5Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M21 21.5V18.425L15.475 12.925C15.325 12.775 15.1583 12.6667 14.975 12.6C14.7917 12.5333 14.6083 12.5 14.425 12.5C14.225 12.5 14.0333 12.5375 13.85 12.6125C13.6667 12.6875 13.5 12.8 13.35 12.95L12.425 13.875C12.2917 14.025 12.1875 14.1917 12.1125 14.375C12.0375 14.5583 12 14.7417 12 14.925C12 15.1083 12.0333 15.2958 12.1 15.4875C12.1667 15.6792 12.275 15.85 12.425 16L17.925 21.5H21ZM19.5 20H18.55L15.525 16.95L16.45 16.025L19.5 19.05V20Z" fill="currentColor"/>
  </svg>
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
