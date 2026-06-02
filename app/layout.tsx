import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jessie and Amor — Malaysia Singapore Trip',
  description: 'A premium Malaysia and Singapore travel itinerary for Jessie and Amor, rebuilt in Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
