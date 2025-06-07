"use client";

import React from "react";

import JotaiProvider from "./jotaiProvider";
import ReactQueryProvider from "./ReactQueryProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </JotaiProvider>
  );
};
export default Providers;
