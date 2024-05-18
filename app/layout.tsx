import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designo",
  description: "Project for testing my frontend skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-[100vh] flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
