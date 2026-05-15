import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Yadav — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, Node.js, and scalable web applications. Founder of Musubi Earn.",
  keywords: [
    "Aditya Yadav",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Yadav" }],
  openGraph: {
    title: "Aditya Yadav — Full Stack Developer",
    description:
      "Building scalable web apps, real-time platforms, and AI-powered products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
