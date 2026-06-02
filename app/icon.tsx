import { ImageResponse } from 'next/og';

export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #1c1b19 0%, #2a2925 55%, #ecece6 100%)',
        }}
      >
        <div
          style={{
            width: 430,
            height: 430,
            borderRadius: 120,
            background: 'rgba(255,255,255,0.11)',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 26px 70px rgba(0,0,0,0.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 266,
              height: 266,
              borderRadius: 90,
              background: 'linear-gradient(180deg, #ecece6 0%, #ffffff 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.72)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1d1b18',
              fontSize: 112,
              fontWeight: 700,
              letterSpacing: '-0.06em',
              fontFamily: 'Georgia, serif',
            }}
          >
            J&amp;A
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 42,
              color: 'rgba(255,255,255,0.72)',
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            Trip
          </div>
        </div>
      </div>
    ),
    size
  );
}
