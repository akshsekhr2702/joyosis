import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "Joyosis",
  description: "Eliminating loneliness everywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
