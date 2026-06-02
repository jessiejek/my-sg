import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Malaysia Itinerary — July 12–15',
  description: 'A premium Malaysia travel itinerary for two people, rebuilt in Next.js.',
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
