import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Lucas",
  description: "Senior Frontend Engineer @ Maersk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tag = process.env.NEXT_PUBLIC_GA ?? "";
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <GoogleAnalytics gaId={tag} />
    </html>
  );
}
