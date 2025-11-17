import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cabin } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated_bg";
import Navbar from "@/components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cabin = Cabin({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cabin',
});

export const metadata: Metadata = {
  title: "Vivota Education | Founded by Medical Students in Singapore",
  description: `Vivota Education is a trusted tuition centre in Singapore, founded by medical school students who personally tutor. 
  We offer affordable, high-quality tuition for Junior College students in Chemistry, Physics, Biology, Math, and General Paper to help students excel academically.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabin.variable} antialiased `}
      >
        <AnimatedBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
