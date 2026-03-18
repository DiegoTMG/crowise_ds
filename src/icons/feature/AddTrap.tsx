import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddTrap: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M19 16V13H17V16H14V18H17V21H19V18H22V16H19Z" fill="currentColor"/>
<path d="M12 1L20 9.68421L19.2306 10.9648H16.9598L17.5782 9.93553L12 3.88027L6.42182 9.93553L12 19.2203L12.3571 18.6259L14.0431 19.5993L12 23L4 9.68421L12 1Z" fill="currentColor"/>
  </svg>
);

AddTrap.displayName = "AddTrap";
export default AddTrap;
