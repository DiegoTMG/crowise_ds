import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SiloFilled: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M12.4472 2.22361C12.1657 2.08285 11.8343 2.08285 11.5528 2.22361L6.27639 4.86181C6.107 4.94651 6 5.11964 6 5.30903V6.00001H18V5.30903C18 5.11964 17.893 4.94651 17.7236 4.86181L12.4472 2.22361Z" fill="currentColor"/>
<path d="M6 7.00085H18V13.0009H6V7.00085Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4 20.5009C4 20.2247 4.22386 20.0009 4.5 20.0009H6V14.0009H18V20.0009H19.5C19.7761 20.0009 20 20.2247 20 20.5009V21.5009C20 21.777 19.7761 22.0009 19.5 22.0009H4.5C4.22386 22.0009 4 21.777 4 21.5009V20.5009ZM8 20.0009V16.0009H9L10.5 17.0009V18.5009C10.5 18.777 10.7239 19.0009 11 19.0009H13C13.2761 19.0009 13.5 18.777 13.5 18.5009V17.0009L15 16.0009H16V20.0009H8Z" fill="currentColor"/>
  </svg>
);

SiloFilled.displayName = "SiloFilled";
export default SiloFilled;
