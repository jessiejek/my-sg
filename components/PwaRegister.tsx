'use client';

import { useEffect } from 'react';

export function PwaRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    if (typeof window === 'undefined') return;
    if (!['localhost', '127.0.0.1'].includes(window.location.hostname) && window.location.protocol !== 'https:') {
      return;
    }

    const register = () => {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.warn('Service worker registration failed:', error);
      });
    };

    if (document.readyState === 'complete') {
      register();
      return;
    }

    window.addEventListener('load', register, { once: true });
    return () => window.removeEventListener('load', register);
  }, []);

  return null;
}
