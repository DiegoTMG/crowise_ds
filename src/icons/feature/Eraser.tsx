import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Eraser: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M17.7592 18H21.9992V20H15.7898L17.7592 18ZM4.7492 20L2.6242 17.875C2.24087 17.4917 2.04504 17.0167 2.0367 16.45C2.02837 15.8833 2.21587 15.4 2.5992 15L13.5992 3.6C13.9825 3.2 14.4534 3 15.0117 3C15.57 3 16.0409 3.19167 16.4242 3.575L21.3992 8.55C21.7825 8.93333 21.9742 9.40833 21.9742 9.975C21.9742 10.5417 21.7825 11.0167 21.3992 11.4L12.9992 20H4.7492ZM12.1492 18L19.9992 9.95L15.0492 5L3.9992 16.4L5.5992 18H12.1492Z" fill="currentColor"/>
  </svg>
);

Eraser.displayName = "Eraser";
export default Eraser;
