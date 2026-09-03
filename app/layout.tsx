import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Numerixx — Decode · Understand · Transform',
  description: 'Personalised numerology and human behaviour guidance with Harpreet Kaur.',
  openGraph: { title: 'Numerixx — Decode · Understand · Transform', description: 'Personalised guidance for every stage of life.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Numerixx — Decode · Understand · Transform', description: 'Personalised guidance for every stage of life.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
