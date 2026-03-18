import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShoppingCart: React.FC<IconProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M18.2961 11.97C17.9561 12.59 17.2961 13 16.5461 13H9.09609L7.99609 15H19.9961V17H7.99609C6.47609 17 5.51609 15.37 6.24609 14.03L7.59609 11.59L3.99609 4H1.99609V2H5.26609L6.20609 4H21.0061C21.7661 4 22.2461 4.82 21.8761 5.48L18.2961 11.97ZM19.3062 6H7.15625L9.52625 11H16.5463L19.3062 6ZM7.99586 18C6.89586 18 6.00586 18.9 6.00586 20C6.00586 21.1 6.89586 22 7.99586 22C9.09586 22 9.99586 21.1 9.99586 20C9.99586 18.9 9.09586 18 7.99586 18ZM16.0059 20C16.0059 18.9 16.8959 18 17.9959 18C19.0959 18 19.9959 18.9 19.9959 20C19.9959 21.1 19.0959 22 17.9959 22C16.8959 22 16.0059 21.1 16.0059 20Z" fill="currentColor"/>
  </svg>
);

ShoppingCart.displayName = "ShoppingCart";
export default ShoppingCart;
