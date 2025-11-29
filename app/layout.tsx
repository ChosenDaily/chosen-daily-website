import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MixpanelProvider from "@/components/MixpanelProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chosen Daily - Scripture-Powered Spiritual Growth",
  description: "Transform your faith journey through journaling, AI biblical insights, and authentic Christian community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MixpanelProvider>
          {children}
        </MixpanelProvider>
      </body>
    </html>
  );
}
