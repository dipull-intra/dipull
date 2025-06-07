import React, { HTMLAttributes } from "react";

const Logo = ({
  className = "",
}: {
  className?: HTMLAttributes<HTMLOrSVGElement>["className"];
}) => {
  return (
    <svg 
      className={[
        className,
        "transition-all duration-300 ease-out hover:scale-105",
      ].join(" ")} 
      viewBox="0 0 113 113" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M0 0H28.0126C43.7457 0 56.5 12.7542 56.5 28.4874V56.5H0V0Z" 
        className="fill-stone-700 dark:fill-stone-50"
      />
      <path 
        d="M56.5 0H113V28.25C113 43.8521 100.352 56.5 84.75 56.5C69.1479 56.5 56.5 43.8521 56.5 28.25V0Z" 
        className="fill-stone-700 dark:fill-stone-50"
      />
      <path 
        d="M0 84.9874C0 69.2543 12.7542 56.5 28.4874 56.5H56.5V113H0V84.9874Z" 
        className="fill-stone-700 dark:fill-stone-50"
      />
      <path 
        d="M56.5 56.5H113V113H84.9874C69.2543 113 56.5 100.246 56.5 84.5126V56.5Z" 
        className="fill-stone-700 dark:fill-stone-50"
      />
    </svg>
  );
};

export default Logo;