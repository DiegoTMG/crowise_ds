import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Rotate90DegreesCcw: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M13.5697 4.61891C15.8697 4.61891 18.1797 5.49891 19.9297 7.25891C23.4497 10.7689 23.4497 16.4689 19.9297 19.9789C18.1797 21.7389 15.8697 22.6189 13.5697 22.6189C12.0797 22.6189 10.5897 22.2389 9.23969 21.4989L10.7297 20.0089C11.6297 20.4089 12.5997 20.6189 13.5697 20.6189C15.3597 20.6189 17.1497 19.9389 18.5197 18.5689C21.2497 15.8389 21.2497 11.3989 18.5197 8.66891C17.1497 7.29891 15.3597 6.61891 13.5697 6.61891V9.85891L9.32969 5.61891L13.5697 1.37891V4.61891ZM7.90969 7.02734L1.42969 13.5173L7.91969 19.9973L14.4097 13.5173L7.90969 7.02734ZM4.25969 13.5189L7.91969 9.85891L11.5697 13.5189L7.90969 17.1789L4.25969 13.5189Z" fill="currentColor"/>
  </svg>
);

Rotate90DegreesCcw.displayName = "Rotate90DegreesCcw";
export default Rotate90DegreesCcw;
