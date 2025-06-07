import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import React from "react";

import { IconProps } from ".";

gsap.registerPlugin(MorphSVGPlugin);

const Fill = (
  {
    iconProps: props = {},
    filledPath,
    outlinePath,
  }: {
    iconProps?: IconProps;
    filledPath: string;
    outlinePath: string;
  },
) => {
  const pathRef = React.useRef<SVGPathElement>(null);

  React.useEffect(() => {
    if (pathRef.current) {
      gsap.to(pathRef.current, {
        duration: 0.2, 
        morphSVG: props.fill ? filledPath : outlinePath,
        ease: "power3.out"
      });
    }
  }, [props.fill]);

  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_315_2402)">
        <path
          ref={pathRef}
          d={props.defaultFill ? filledPath : outlinePath}
          className="fill-current"
        />
      </g>
    </svg>
  );
};

export default Fill;

