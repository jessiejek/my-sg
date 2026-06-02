import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #111111 0%, #35322d 100%)',
        }}
      >
        <div
          style={{
            width: 148,
            height: 148,
            borderRadius: 42,
            background: 'linear-gradient(180deg, #ecece6 0%, #ffffff 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#191816',
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: '-0.06em',
            fontFamily: 'Georgia, serif',
          }}
        >
          J&amp;A
        </div>
      </div>
    ),
    size
  );
}
