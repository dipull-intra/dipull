"use client";

import React from "react";

import JotaiProvider from "./jotaiProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import ViewportProvider from "./viewportProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <ViewportProvider>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </ViewportProvider>
    </JotaiProvider>
  );
};
export default Providers;
