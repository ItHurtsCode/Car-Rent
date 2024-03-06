import type { Metadata } from "next";
import { NavBar, Footer } from "@/components";
import "./globals.css";



export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cards in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
