import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";
export const metadata: Metadata = {
  title: "Car HUB",
  description: "Discover the best in the Universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
