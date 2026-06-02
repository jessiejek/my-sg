import type { Metadata } from 'next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { PwaRegister } from '@/components/PwaRegister';

export const metadata: Metadata = {
  title: 'Jessie and Amor — Malaysia Singapore Trip',
  description: 'A premium Malaysia and Singapore travel itinerary for Jessie and Amor, rebuilt in Next.js.',
  manifest: '/manifest.webmanifest',
  applicationName: 'Jessie and Amor',
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
};

export const viewport = {
  themeColor: '#ecece6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
