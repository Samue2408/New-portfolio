import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./styles/globals.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel M | Portfolio",
  description: "portfolio website of Samuel M.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${poppins.className} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
