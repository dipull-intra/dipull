import { useSetAtom } from "jotai";
import React from "react";

import { viewportHeightAtom, viewportWidthAtom } from "@front/utils/states";

const ViewportProvider = ({ children }: { children: React.ReactNode }) => { 
  const setWidth = useSetAtom(viewportWidthAtom);
  const setHeight = useSetAtom(viewportHeightAtom);
  React.useEffect(() => {
    const updateAspect = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      // 세로 / 가로
    };
    updateAspect();
    window.addEventListener("resize", updateAspect);
    return () => window.removeEventListener("resize", updateAspect);
  }, []);

  return children;
};

export default ViewportProvider;