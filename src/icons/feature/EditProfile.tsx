import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EditProfile: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M19.29 11.4405C19.87 10.8506 20.82 10.8506 21.41 11.4405L22.56 12.5905C23.15 13.1705 23.15 14.1205 22.56 14.7105L17.27 20.0006H14V16.7306L19.29 11.4405ZM15.55 17.4205V18.4506H16.58L20.03 15.0006L19 13.9705L15.55 17.4205Z" fill="currentColor"/>
<path d="M12 14C12.5103 14 13.1178 14.0491 13.7667 14.1469L11.913 16.0006C9.24401 16.0276 6.22752 17.2878 6 18H12V20H4V18C4 15.34 9.33 14 12 14Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4ZM12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6Z" fill="currentColor"/>
  </svg>
);

EditProfile.displayName = "EditProfile";
export default EditProfile;
