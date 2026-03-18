import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VideocamOff: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M9.98969 8.56969L7.98969 6.56969L3.83969 2.42969L2.42969 3.83969L5.15969 6.56969H4.42969C3.87969 6.56969 3.42969 7.01969 3.42969 7.56969V17.5697C3.42969 18.1197 3.87969 18.5697 4.42969 18.5697H16.4297C16.6397 18.5697 16.8197 18.4897 16.9797 18.3897L20.1597 21.5697L21.5697 20.1597L12.7097 11.2997L9.98969 8.56969ZM5.42969 16.5703V8.57031H7.15969L15.1597 16.5703H5.42969ZM15.4293 11.1803V8.57031H12.8193L10.8193 6.57031H16.4293C16.9793 6.57031 17.4293 7.02031 17.4293 7.57031V11.0703L21.4293 7.07031V17.1803L15.4293 11.1803Z" fill="currentColor"/>
  </svg>
);

VideocamOff.displayName = "VideocamOff";
export default VideocamOff;
