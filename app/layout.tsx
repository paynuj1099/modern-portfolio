import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-manrope",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Rolando Remolacio",
  description: "Full Stack Developer specializing in .NET, React, and building robust, scalable applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-[#000000] text-[#f4f4f5] overflow-x-hidden antialiased ${manrope.variable} ${syne.variable}`}>
      <body className="font-manrope bg-void text-light selection:bg-white selection:text-void">
        {children}
      </body>
    </html>
  );
}
