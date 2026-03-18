import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Map: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M20.34 3.03L20.5 3C20.78 3 21 3.22 21 3.5V18.62C21 18.85 20.85 19.03 20.64 19.1L15 21L9 18.9L3.66 20.97L3.5 21C3.22 21 3 20.78 3 20.5V5.38C3 5.15 3.15 4.97 3.36 4.9L9 3L15 5.1L20.34 3.03ZM14 6.86875L10 5.46875V17.1287L14 18.5288V6.86875ZM5 6.46L8 5.45V17.15L5 18.31V6.46ZM16 18.55L19 17.54V5.7L16 6.86V18.55Z" fill="currentColor"/>
  </svg>
);

Map.displayName = "Map";
export default Map;
