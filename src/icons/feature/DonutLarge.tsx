import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DonutLarge: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M5.02539 12.0008C5.02539 15.5208 7.63539 18.4308 11.0254 18.9208V21.9508C5.97539 21.4508 2.02539 17.1908 2.02539 12.0008C2.02539 6.81078 5.97539 2.55078 11.0254 2.05078V5.08078C7.63539 5.57078 5.02539 8.48078 5.02539 12.0008ZM13.0254 5.08078C16.0854 5.52078 18.5054 7.94078 18.9454 11.0008H21.9754C21.5054 6.28078 17.7454 2.52078 13.0254 2.05078V5.08078ZM18.9454 13C18.5054 16.06 16.0854 18.48 13.0254 18.92V21.95C17.7454 21.48 21.5054 17.72 21.9754 13H18.9454Z" fill="currentColor"/>
  </svg>
);

DonutLarge.displayName = "DonutLarge";
export default DonutLarge;
