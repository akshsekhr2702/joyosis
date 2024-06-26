import type { Metadata } from "next";

import "./globals.css";


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
      <body>{children}</body>
    </html>
  );
}
