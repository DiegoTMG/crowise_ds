import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CloudError: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M19.35 10.038C18.67 6.58805 15.64 3.99805 12 3.99805C9.11 3.99805 6.6 5.63805 5.35 8.03805C2.34 8.35805 0 10.908 0 13.998C0 17.308 2.69 19.998 6 19.998H19C21.76 19.998 24 17.758 24 14.998C24 12.358 21.95 10.218 19.35 10.038ZM16 10.408L14.59 8.99805L12 11.588L9.41 8.99805L8 10.408L10.59 12.998L8 15.588L9.41 16.998L12 14.408L14.59 16.998L16 15.588L13.41 12.998L16 10.408ZM6.00024 17.999H19.0002C20.6502 17.999 22.0002 16.649 22.0002 14.999C22.0002 13.449 20.7802 12.139 19.2202 12.039L17.6902 11.929L17.3902 10.429C16.8802 7.85902 14.6202 5.99902 12.0002 5.99902C9.94024 5.99902 8.08024 7.13902 7.13024 8.96902L6.63024 9.91902L5.56024 10.029C3.53024 10.239 2.00024 11.949 2.00024 13.999C2.00024 16.209 3.79024 17.999 6.00024 17.999Z" fill="currentColor"/>
  </svg>
);

CloudError.displayName = "CloudError";
export default CloudError;
