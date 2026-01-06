import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ubunifu Technologies | Digital Transformation & Strategic Consulting',
  description: 'Tanzania-based digital transformation and strategic consulting firm. Technology. Strategy. Results. We deliver web development, data analytics, AI solutions, brand design, and digital training across all sectors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
