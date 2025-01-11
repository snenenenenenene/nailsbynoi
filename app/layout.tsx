// app/layout.tsx
import { Background } from '@/components/background';
import { DevelopmentBanner } from '@/components/development-banner';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { inter, outfit } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.businessName,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: "Professionele nagelverzorging en medische pedicure in Brasschaat. Vakkundige behandelingen met premium producten.",
  keywords: ["manicure", "pedicure", "nagelverzorging", "medische pedicure", "Brasschaat", "nagelstudio", "nagelsalon"],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: siteConfig.url,
    title: siteConfig.businessName,
    description: "Professionele nagelverzorging en medische pedicure in Brasschaat",
    siteName: siteConfig.businessName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.businessName,
    description: "Professionele nagelverzorging en medische pedicure in Brasschaat",
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
        <Background />
        <Navigation />
        {children}
        <Footer />
        <DevelopmentBanner />
      </body>
    </html>
  );
}