
import React from 'react';

const TruckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    {/* Speed lines */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 10.5h3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h6.75" />

    {/* Car */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12.75V12A2.25 2.25 0 0 0 19.5 9.75h-3.75c-.356 0-.696.066-1.012.188L11.25 12.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 12.75H8.25a3.75 3.75 0 0 0-3.75 3.75V18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12.75h-10.5" />

    {/* Wheels */}
    <circle cx="9" cy="18" r="1.5" />
    <circle cx="18" cy="18" r="1.5" />
  </svg>
);

export default TruckIcon;
