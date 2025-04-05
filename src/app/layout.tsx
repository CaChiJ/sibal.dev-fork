import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sibal",
  description: "아무 말이나 하는 곳",
  icons: {
    icon: "/icons/lion.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="h-screen w-screen antialiased">
        <NextThemesProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </NextThemesProvider>
      </body>
    </html>
  );
}
