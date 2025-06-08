"use client";

import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import React from "react";

import { IconProps } from ".";

gsap.registerPlugin(MorphSVGPlugin);

const checkedPath = "M7.06667 9.43333L5.63333 8C5.51111 7.87778 5.35556 7.81667 5.16667 7.81667C4.97778 7.81667 4.82222 7.87778 4.7 8C4.57778 8.12222 4.51667 8.27778 4.51667 8.46667C4.51667 8.65556 4.57778 8.81111 4.7 8.93333L6.6 10.8333C6.73333 10.9667 6.88889 11.0333 7.06667 11.0333C7.24444 11.0333 7.4 10.9667 7.53333 10.8333L11.3 7.06667C11.4222 6.94444 11.4833 6.78889 11.4833 6.6C11.4833 6.41111 11.4222 6.25556 11.3 6.13333C11.1778 6.01111 11.0222 5.95 10.8333 5.95C10.6444 5.95 10.4889 6.01111 10.3667 6.13333L7.06667 9.43333ZM3.33333 14.5C2.96667 14.5 2.65278 14.3694 2.39167 14.1083C2.13056 13.8472 2 13.5333 2 13.1667V3.83333C2 3.46667 2.13056 3.15278 2.39167 2.89167C2.65278 2.63056 2.96667 2.5 3.33333 2.5H12.6667C13.0333 2.5 13.3472 2.63056 13.6083 2.89167C13.8694 3.15278 14 3.46667 14 3.83333V13.1667C14 13.5333 13.8694 13.8472 13.6083 14.1083C13.3472 14.3694 13.0333 14.5 12.6667 14.5H3.33333ZM3.33333 13.1667H12.6667V3.83333H3.33333V13.1667Z";
const outlinePath = "M3.33333 14.5C2.96667 14.5 2.65278 14.3694 2.39167 14.1083C2.13056 13.8472 2 13.5333 2 13.1667V3.83333C2 3.46667 2.13056 3.15278 2.39167 2.89167C2.65278 2.63056 2.96667 2.5 3.33333 2.5H12.6667C13.0333 2.5 13.3472 2.63056 13.6083 2.89167C13.8694 3.15278 14 3.46667 14 3.83333V13.1667C14 13.5333 13.8694 13.8472 13.6083 14.1083C13.3472 14.3694 13.0333 14.5 12.6667 14.5H3.33333ZM3.33333 13.1667H12.6667V3.83333H3.33333V13.1667Z";

const Checker = (
  props: IconProps,
) => {
  const pathRef = React.useRef<SVGPathElement>(null);

  React.useEffect(() => {
    if (pathRef.current) {
      gsap.to(pathRef.current, {
        duration: 0.2, 
        morphSVG: props.fill ? checkedPath : outlinePath,
        ease: "power3.out"
      });
    }
  }, [props.fill]);

  return (
    <svg
      className={props.className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_315_2402)">
        <path
          ref={pathRef}
          d={props.defaultFill ? checkedPath : outlinePath}
          className={[
            "transition-all duration-200 ease-in-out",
            props.fill ? "fill-key" : "fill-key/30",
          ].join(" ")}
        />
      </g>
    </svg>
  );
};

export default Checker;

