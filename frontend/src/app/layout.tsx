import type { Metadata, Viewport } from "next";
import "./globals.css";
import { headers } from "next/headers";
import React from "react";

import Header from "@front/components/header";
import Providers from "@front/providers";

export const metadata: Metadata = {
  title: "Jeamin Choi · 최재민",
  description: "Jeamin Choi's personal website",
  openGraph: {
    title: "Jeamin Choi · 최재민",
    description: "Jeamin Choi's personal website",
    url: "https://jeamxn.dev",
    siteName: "Jeamin Choi · 최재민",
    images: [
      {
        url: "https://jeamxn.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeamin Choi's personal website",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const headersList = await headers();
  const origin = headersList.get("x-origin") || "";
  const pathname = headersList.get("x-pathname") || "";
  
  return (
    <html lang="ko" className="h-full w-full overflow-x-hidden bg-background">
      <body className="antialiased h-full w-full bg-backround">
        <Providers>
          <div className="w-full h-full flex flex-row">
            <Header origin={origin} pathname={pathname} />
            <div className="w-full h-full overflow-y-auto">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
};


export default RootLayout;