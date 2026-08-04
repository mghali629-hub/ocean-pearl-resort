import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://oceanpearlresort.com'),
  title: {
    default: 'Ocean Pearl Resort | Ultra-Luxury Overwater Villas & Island Haven',
    template: '%s | Ocean Pearl Maldives',
  },
  description: '5-star eco-luxury island resort featuring glass-floor overwater villas, underwater dining at Pearl Overwater Grill, Manta Ray safaris, and 100% solar energy.',
  keywords: ['Luxury Resort', 'Overwater Villas', 'Maldives Resort', 'Manta Ray Safari', 'Eco Luxury', 'Private Island'],
  openGraph: {
    title: 'Ocean Pearl Resort | Ultra-Luxury Private Island',
    description: 'Experience pristine overwater villas, holistic spa sanctuaries, and world-class marine safaris.',
    url: 'https://oceanpearlresort.com',
    siteName: 'Ocean Pearl Luxury Resort',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ocean Pearl Eco-Luxury Resort',
    description: 'Pristine overwater villas and eco-luxury island experiences.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#061523] text-slate-100 antialiased selection:bg-teal-500 selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
