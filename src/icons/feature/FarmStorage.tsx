import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FarmStorage: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M1 11.4L12 3L23 11.4L21.79 12.98L20 11.62V21H4V11.62L2.21 12.99L1 11.4ZM18 19H17V15H15V11H9V15H7V19H6V10.1L12 5.52L18 10.1V19ZM9 17V19H11V17H9ZM13 17V19H15V17H13ZM13 15V13H11V15H13Z" fill="currentColor"/>
  </svg>
);

FarmStorage.displayName = "FarmStorage";
export default FarmStorage;
