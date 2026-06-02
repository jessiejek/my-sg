import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jessie and Amor - Malaysia Singapore Trip',
    short_name: 'Jessie & Amor',
    description: 'A premium Malaysia and Singapore travel itinerary for Jessie and Amor.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ecece6',
    theme_color: '#111111',
    id: '/',
    icons: [
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
