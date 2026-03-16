import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsInputComponent: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M4 1C4 0.45 3.55 0 3 0C2.45 0 2 0.45 2 1V5H0V15C0 16.3 0.84 17.4 2 17.82V22H4V17.82C5.16 17.4 6 16.3 6 15V5H4V1ZM3 16C2.45 16 2 15.55 2 15V13H4V15C4 15.55 3.55 16 3 16ZM2 7V11H4V7H2ZM12 1C12 0.45 11.55 0 11 0C10.45 0 10 0.45 10 1V5H8V15C8 16.3 8.84 17.4 10 17.82V22H12V17.82C13.16 17.4 14 16.3 14 15V5H12V1ZM10 15C10 15.55 10.45 16 11 16C11.55 16 12 15.55 12 15V13H10V15ZM10 11V7H12V11H10ZM20 1V5H22V15C22 16.3 21.16 17.4 20 17.82V22H18V17.82C16.84 17.4 16 16.3 16 15V5H18V1C18 0.45 18.45 0 19 0C19.55 0 20 0.45 20 1ZM19 16C18.45 16 18 15.55 18 15V13H20V15C20 15.55 19.55 16 19 16ZM18 7V11H20V7H18Z" fill="currentColor"/>
  </svg>
);

SettingsInputComponent.displayName = "SettingsInputComponent";
export default SettingsInputComponent;
