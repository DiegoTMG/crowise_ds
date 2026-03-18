import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ImageSearch: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M19.09 8.89C19.53 8.19 19.79 7.38 19.79 6.5C19.79 4.01 17.78 2 15.29 2C12.8 2 10.79 4.01 10.79 6.5C10.79 8.99 12.8 11 15.28 11C16.16 11 16.98 10.74 17.67 10.3L20.79 13.42L22.21 12L19.09 8.89ZM17.79 20V13L19.79 15V20C19.79 21.1 18.89 22 17.79 22H3.79C2.69 22 1.79 21.1 1.79 20V6C1.79 4.9 2.69 4 3.79 4H9.29C9.03 4.62 8.86 5.29 8.81 6H3.79V20H17.79ZM16.29 18L12.75 13.29L10 16.83L8.04 14.47L5.29 18H16.29ZM12.79 6.5C12.79 7.88 13.91 9 15.29 9C16.67 9 17.79 7.88 17.79 6.5C17.79 5.12 16.67 4 15.29 4C13.91 4 12.79 5.12 12.79 6.5Z" fill="currentColor"/>
  </svg>
);

ImageSearch.displayName = "ImageSearch";
export default ImageSearch;
