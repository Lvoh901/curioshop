import type { Metadata } from "next";
import { DM_Serif_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

// Required field 'weight' added as per Next.js font API
const dmserifdisplay = DM_Serif_Display({
  variable: "--font-dmserifdisplay",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"], // common Montserrat weights, adjust as needed
});

export const metadata: Metadata = {
  title: "Curio Shop | Unique & Rare Collectibles",
  description: "Discover a world of curiosities, antiques, and unique artifacts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmserifdisplay.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
