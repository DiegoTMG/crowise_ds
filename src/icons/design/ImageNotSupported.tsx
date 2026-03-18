import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ImageNotSupported: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M21.9004 21.9016L2.10043 2.10156L0.69043 3.51156L3.00043 5.83156V19.0016C3.00043 20.1016 3.90043 21.0016 5.00043 21.0016H18.1704L20.4804 23.3116L21.9004 21.9016ZM5.00043 19.0016V7.83156L11.8404 14.6716L11.0004 15.7216L9.00043 13.0016L6.00043 17.0016H14.1704L16.1704 19.0016H5.00043ZM7.83043 5.00156L5.83043 3.00156H19.0004C20.1004 3.00156 21.0004 3.90156 21.0004 5.00156V18.1716L19.0004 16.1716V5.00156H7.83043Z" fill="currentColor"/>
  </svg>
);

ImageNotSupported.displayName = "ImageNotSupported";
export default ImageNotSupported;
