import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CoinContextProvider from "@/app/context/page";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Crypto tracker",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <CoinContextProvider>
          <Navbar />
          {children}
          <Footer/>
        </CoinContextProvider>
      </body>
    </html>
  );
}
