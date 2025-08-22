import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "./components/ConsentBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Plantich - AI-Powered Botanical Wisdom",
    template: "%s | Plantich"
  },
  description: "AI-powered Nordic luxury herbal apothecary platform. Discover the sacred alchemy of plants through curated knowledge, premium botanical wisdom, and intelligent recommendations for holistic wellness.",
  keywords: [
    "herbal medicine",
    "natural remedies",
    "medicinal plants",
    "holistic wellness",
    "botanical wisdom",
    "herbal apothecary",
    "plant medicine",
    "natural healing",
    "herbal remedies",
    "wellness platform"
  ],
  authors: [{ name: "Plantich" }],
  creator: "Plantich",
  publisher: "Plantich",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://plantich.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://plantich.com',
    title: 'Plantich - The Sacred Alchemy of Plants',
    description: 'A Nordic luxury herbal apothecary platform. Discover the sacred alchemy of plants through curated knowledge and premium botanical wisdom.',
    siteName: 'Plantich',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Plantich - The Sacred Alchemy of Plants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plantich - The Sacred Alchemy of Plants',
    description: 'A Nordic luxury herbal apothecary platform. Discover the sacred alchemy of plants through curated knowledge and premium botanical wisdom.',
    images: ['/og-image.jpg'],
    creator: '@plantich',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6C8DN7WVNX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6C8DN7WVNX');
            `,
          }}
        />
        
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fefcf9" />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col bg-background`}
      >
        <ConsentBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
