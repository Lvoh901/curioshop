import type { Metadata } from "next";
import { DM_Serif_Display, Montserrat } from "next/font/google";
import "./globals.css";
import "@uploadthing/react/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";
import { getAdminSession } from "@/lib/auth";

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
  title: "Jakem Business Solutions | Authentic Curios & Rare Artifacts",
  description: "Discover a curated collection of authentic Kenyan soapstone carvings, traditional artifacts, and unique curiosities at Jakem Business Solutions. Rare pieces for the discerning collector.",
  keywords: ["curio shop", "Kenyan artifacts", "soapstone carvings", "African art", "Jakem Business Solutions", "authentic crafts"],
  icons: {
    icon: "/jakem_logo.png",
    apple: "/jakem_logo.png",
  },
  openGraph: {
    title: "Jakem Business Solutions | Rare Curiosities & Artifacts",
    description: "Explore the finest collection of handcrafted soapstone carvings and unique traditional artifacts.",
    type: "website",
    locale: "en_KE",
    siteName: "Jakem Business Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakem Business Solutions | Authentic Curios",
    description: "Handcrafted Kenyan soapstone and rare traditional artifacts.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adminSession = await getAdminSession();
  const showMainShell = !adminSession;

  return (
    <html
      lang="en"
      className={`${dmserifdisplay.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {showMainShell ? <Navbar /> : null}
        <div className="">
          {children}
        </div>
        {showMainShell ? <Footer /> : null}
      </body>
    </html>
  );
}
