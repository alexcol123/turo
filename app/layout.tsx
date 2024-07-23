import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from './providers'
import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turo | Find your perfect car",
  description: "Find your perfect car on Turo, the world's largest car sharing marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
      <ClerkProvider >
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
