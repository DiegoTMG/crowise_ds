import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Farm: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M10 4.91211L18 8.34068V13.0001H16V9.65947L10 7.08804L4 9.65947V13.0001H2V8.34068L10 4.91211Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.5 10H13.5V13H11.5V12H8.5V13H6.5V10Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18 4.17558V13.0001H16V4H17C16 4 16 3.99902 16 3.99803L16 3.99603L16 3.99194L16.0001 3.9834L16.0006 3.96489C16.001 3.95192 16.0017 3.93768 16.0027 3.92225C16.0048 3.89143 16.0082 3.85564 16.014 3.81561C16.0254 3.73572 16.0459 3.63751 16.0826 3.52752C16.1571 3.30407 16.2957 3.04006 16.5429 2.79289C17.0466 2.28921 17.8459 2 19 2C20.1541 2 20.9534 2.28921 21.4571 2.79289C21.7043 3.04006 21.8429 3.30407 21.9174 3.52752C21.9541 3.63751 21.9746 3.73572 21.986 3.81561C21.9918 3.85564 21.9952 3.89143 21.9973 3.92225C21.9983 3.93768 21.999 3.95192 21.9994 3.96489L21.9999 3.9834L22 3.99194L22 3.99603L22 3.99803C22 3.99902 22 4 21 4H22V13H20V4.17558C19.9688 4.15651 19.9181 4.13095 19.84 4.10493C19.6836 4.0528 19.4197 4 19 4C18.5803 4 18.3164 4.0528 18.16 4.10493C18.0819 4.13095 18.0312 4.15651 18 4.17558Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22 16H2V14H22V16Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22 19H2V17H22V19Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M22 22H2V20H22V22Z" fill="currentColor"/>
  </svg>
);

Farm.displayName = "Farm";
export default Farm;
