import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chosen Daily - Transform Your Faith Journey",
  description: "Experience scripture-powered journaling, AI-guided biblical insights, and authentic Christian community. Join 50,000+ believers growing deeper in faith.",
  openGraph: {
    title: "Chosen Daily - Transform Your Faith Journey",
    description: "Experience scripture-powered journaling, AI-guided biblical insights, and authentic Christian community.",
    type: "website",
    url: "https://chosendaily.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chosen Daily - Transform Your Faith Journey",
    description: "Join 50,000+ believers transforming their faith through journaling, AI insights, and community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}