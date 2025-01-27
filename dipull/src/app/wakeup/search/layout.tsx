import { Metadata, ResolvingMetadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "기상송 검색하기 :: 디풀",
  };
}
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return children;
};

export default Layout;