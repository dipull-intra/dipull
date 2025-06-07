import { Provider } from "jotai";
import React from "react";

const JotaiProvider = ({ children }: { children: React.ReactNode }) => { 
  return (
    <Provider>
      {children}
    </Provider>
  );
};

export default JotaiProvider;
