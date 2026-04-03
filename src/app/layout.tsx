import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-SDLC App",
  description: "Automatizovaný vývoj poháněný AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
