import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Article: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M7 17H14V15H7V17Z" fill="currentColor"/>
<path d="M7 13H17V11H7V13Z" fill="currentColor"/>
<path d="M7 9H17V7H7V9Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM19 19V5H5V19H19Z" fill="currentColor"/>
  </svg>
);

Article.displayName = "Article";
export default Article;
