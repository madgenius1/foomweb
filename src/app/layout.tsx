import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "./ui-items/common/Navbar";
import Footer from "./ui-items/common/Footer";


const comfortaa = Comfortaa({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Foom App",
  description: "Invest while increasing productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={comfortaa.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
