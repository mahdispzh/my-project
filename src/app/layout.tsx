import type { Metadata } from "next";
import "@/src/app/globals.css";

export const metadata: Metadata = {
  title: "کافه ریشه",
  description: "کافه ریشه",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}