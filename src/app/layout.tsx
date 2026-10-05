import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe Risheh",
  description: "کافه ریشه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}