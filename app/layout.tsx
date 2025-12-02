import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeremiah Agenyi | Product Manager & Digital Communications Specialist",
  description: "Product Manager & Co-founder specializing in strategic communications, digital marketing, and building technology solutions for social impact. 12+ years experience bridging technology and social good.",
  keywords: ["Product Manager", "Digital Marketing", "Strategic Communications", "WordPress Development", "Public Health", "Social Impact", "AI Integration", "Next.js Development"],
  authors: [{ name: "Jeremiah Agenyi" }],
  openGraph: {
    title: "Jeremiah Agenyi | Product Manager & Digital Communications Specialist",
    description: "Product Manager & Co-founder specializing in strategic communications, digital marketing, and building technology solutions for social impact.",
    type: "website",
    locale: "en_US",
    url: "https://jeremyagenyi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremiah Agenyi | Product Manager & Digital Communications Specialist",
    description: "Product Manager & Co-founder specializing in strategic communications, digital marketing, and building technology solutions for social impact.",
    creator: "@jerryagenyi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
