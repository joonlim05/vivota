import type { Metadata } from "next";
import { Cabin } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated_bg";
import Navbar from "@/components/navbar";
import WhatsappFloat from "@/components/whatsapp_float";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

const cabin = Cabin({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cabin',
});

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  title: "Vivota Education | Founded by Medical Students in Singapore",
  description: `Vivota Education is a trusted tuition centre in Singapore, founded by medical school students who personally tutor. 
  We offer affordable, high-quality tuition for Junior College students in Chemistry, Physics, Biology, Math, and General Paper to
  help students excel academically.`,
  icons: {
    icon: '/favicon.ico',
    apple: '/favicons/apple-icon.png',
    other: [
      { rel: 'icon', url: '/favicons/web-app-manifest-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/favicons/web-app-manifest-512x512.png', sizes: '512x512' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {GTM_ID && (
          <Script id="gtm-script" strategy="beforeInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
          </Script>
        )}
      </head>
      <body
        className={`${cabin.variable} antialiased `}
      >
        <AnimatedBackground />
        <Navbar />
        <WhatsappFloat />
        {children}
        {adsId && <GoogleAnalytics gaId={adsId} />}
        <Footer />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
