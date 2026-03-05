import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="bg-[#000000] text-[#f4f4f5] overflow-x-hidden antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Syne:wght@600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-manrope bg-void text-light selection:bg-white selection:text-void">
        {children}
      </body>
    </html>
  );
}
