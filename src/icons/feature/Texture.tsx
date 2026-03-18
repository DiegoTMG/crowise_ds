import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Texture: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M11.88 3L3 11.88V14.71L14.71 3H11.88ZM19.5101 3.07812L3.08008 19.5081C3.17008 19.8481 3.35008 20.1581 3.59008 20.4081C3.84008 20.6481 4.15008 20.8281 4.49008 20.9181L20.9301 4.48812C20.7401 3.79812 20.2001 3.25813 19.5101 3.07812ZM3 5C3 3.9 3.9 3 5 3H7L3 7V5ZM19 21C19.55 21 20.05 20.78 20.41 20.41C20.78 20.05 21 19.55 21 19V17L17 21H19ZM12.12 21H9.29L21 9.29V12.12L12.12 21Z" fill="currentColor"/>
  </svg>
);

Texture.displayName = "Texture";
export default Texture;
