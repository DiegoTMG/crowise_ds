import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReplaceData: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M18 15C16.3425 15 15 16.3425 15 18C15 19.6575 16.3425 21 18 21C19.6575 21 21 19.6575 21 18C21 16.3425 19.6575 15 18 15ZM19 18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18C17 17.4477 17.4477 17 18 17C18.5523 17 19 17.4477 19 18Z" fill="currentColor"/>
<path d="M17 13C19.2091 13 21 11.2091 21 9C21 6.79086 19.2091 5 17 5L10 5V7L17 7C18.1046 7 19 7.89542 19 9C19 10.1046 18.1046 11 17 11L7 11C4.79086 11 3 12.7909 3 15C3 17.2091 4.79086 19 7 19H14V17H7C5.89543 17 5 16.1046 5 15C5 13.8954 5.89543 13 7 13H17Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9 3H3V9H9L9 3ZM7 5H5L5 7H7V5Z" fill="currentColor"/>
  </svg>
);

ReplaceData.displayName = "ReplaceData";
export default ReplaceData;
