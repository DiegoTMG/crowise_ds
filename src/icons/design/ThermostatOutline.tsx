import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ThermostatOutline: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V15.2676C10.4022 15.6134 10 16.2597 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 16.2597 13.5978 15.6134 13 15.2676V11Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V13.6824C17.6317 14.6329 18 15.7746 18 17C18 20.3137 15.3137 23 12 23C8.68629 23 6 20.3137 6 17C6 15.7746 6.36833 14.6329 7 13.6824V6ZM12 3C10.3431 3 9 4.34315 9 6V14.3333L8.79949 14.6002C8.29723 15.2687 8 16.0982 8 17C8 19.2091 9.79086 21 12 21C14.2091 21 16 19.2091 16 17C16 16.0982 15.7028 15.2687 15.2005 14.6002L15 14.3333V6C15 4.34315 13.6569 3 12 3Z" fill="currentColor"/>
  </svg>
);

ThermostatOutline.displayName = "ThermostatOutline";
export default ThermostatOutline;
