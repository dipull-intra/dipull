"use client";

import React from "react";

import { IconProps } from ".";

const Logo = (props: IconProps) => {
  return (
    <svg className={props.className} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_315_2395)">
        <path className="fill-current" d="M8.05155 6.00923C8.33286 6.29054 8.7144 6.44858 9.11223 6.44858H16.5518C17.3802 6.44858 18.0518 7.12013 18.0518 7.94858V15.3882C18.0518 15.786 18.2098 16.1675 18.4911 16.4488L21.4397 19.3974C22.3847 20.3423 24.0004 19.6731 24.0004 18.3367V2C24.0004 1.17157 23.3288 0.5 22.5004 0.5H6.16365C4.8273 0.5 4.15803 2.11571 5.103 3.06066L8.05155 6.00923Z" />
        <path className="fill-current" d="M15.9488 18.9909C15.6675 18.7096 15.286 18.5516 14.8882 18.5516H7.44858C6.62016 18.5516 5.94858 17.88 5.94858 17.0516V9.61199C5.94858 9.21416 5.79054 8.83262 5.50923 8.55131L2.56066 5.60276C1.61572 4.65779 0 5.32706 0 6.66341V23.0001C0 23.8286 0.671574 24.5001 1.5 24.5001H17.8367C19.1731 24.5001 19.8424 22.8844 18.8974 21.9395L15.9488 18.9909Z" />
      </g>
      <defs>
        <clipPath id="clip0_315_2395">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;