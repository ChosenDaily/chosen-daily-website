import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chosen Daily | Unlock Your Spiritual Potential & Lifespan in Faith",
  description: "Christian journaling app with AI Bible insights, prayer circles, and multi-generational design. Transform your walk with God through daily reflection.",
  keywords: ["Christian journaling", "Bible app", "AI scripture insights", "prayer app", "spiritual growth"],
  openGraph: {
    title: "Chosen Daily - Transform Your Faith Journey",
    description: "One journal, deeper connection to God. Daily use linked to 2x deeper reflections.",
    type: "website",
    url: "https://chosendaily.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
