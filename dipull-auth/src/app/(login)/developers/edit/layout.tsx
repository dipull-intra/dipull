import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "개발자 전용 :: 디풀 계정 센터",
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => children;

export default Layout;