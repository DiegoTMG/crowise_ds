import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PropertyFocus: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path d="M2 6H0V0H6V2H2V6Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16.56 5.02L16.6667 5C16.8533 5 17 5.14667 17 5.33333V15.4133C17 15.5667 16.9 15.6867 16.76 15.7333L13 17L9 15.6L5.44 16.98L5.33333 17C5.14667 17 5 16.8533 5 16.6667V6.58667C5 6.43333 5.1 6.31333 5.24 6.26667L9 5L13 6.4L16.56 5.02ZM15 14.2145L13.0124 14.884L13 14.8797V8.51762L13.0353 8.52998L15 7.76839V14.2145ZM12 8.16762L10 7.46762V13.8297L12 14.5297V8.16762ZM9 7.11762V13.4797L8.96469 13.4673L7 14.2289V7.78286L8.98759 7.11328L9 7.11762Z" fill="currentColor"/>
<path d="M2 16H0V22H6V20H2V16Z" fill="currentColor"/>
<path d="M16 20V22H22V16H20V20H16Z" fill="currentColor"/>
<path d="M16 2V0H22V6H20V2H16Z" fill="currentColor"/>
  </svg>
);

PropertyFocus.displayName = "PropertyFocus";
export default PropertyFocus;
