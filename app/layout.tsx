// app/layout.tsx
import { Background } from '@/components/background';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { inter, outfit } from './fonts';
import './globals.css';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: siteConfig.businessName,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: "Professionele nagelverzorging en medische pedicure uit Brasschaat. Vakkundige behandelingen met premium producten. Service in Brasschaat, Schilde, Schoten, Ekeren, Kapellen en Merksem.",
  keywords: [
    "manicure", "pedicure", "nagelverzorging", "medische pedicure",
    "Brasschaat", "Schilde", "Schoten", "Ekeren", "Kapellen", "Merksem",
    "nagelstudio", "nagelsalon", "pedicure aan huis", "manicure aan huis"
  ],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: siteConfig.url,
    title: siteConfig.businessName,
    description: "Professionele nagelverzorging en medische pedicure uit Brasschaat. Service in Brasschaat, Schilde, Schoten, Ekeren, Kapellen en Merksem.",
    siteName: siteConfig.businessName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.businessName,
    description: "Professionele nagelverzorging en medische pedicure uit Brasschaat. Service in Brasschaat, Schilde, Schoten, Ekeren, Kapellen en Merksem.",
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
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className={`antialiased ${inter.className} min-h-screen`}>
        <Analytics />
        <Background />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}