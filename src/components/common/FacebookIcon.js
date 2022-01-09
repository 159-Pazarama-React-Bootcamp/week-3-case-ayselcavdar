import * as React from "react";

const FacebookIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M24 12.073C24 5.404 18.627 0 12 0 5.37 0-.003 5.405-.003 12.075c0 6.026 4.389 11.02 10.125 11.927v-8.438H7.077v-3.489h3.048V9.413c0-3.026 1.793-4.697 4.533-4.697 1.314 0 2.687.236 2.687.236v2.97H15.83c-1.49 0-1.954.931-1.954 1.887v2.264h3.326l-.53 3.49h-2.798V24C19.611 23.094 24 18.099 24 12.073Z"
        fill="#059BE5"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={24} height={24} rx={12} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);

export default FacebookIcon;
