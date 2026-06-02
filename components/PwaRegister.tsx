'use client';

import { useEffect } from 'react';

export function PwaRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    if (typeof window === 'undefined') return;
    const isLocalDev = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const isSecureContext = window.location.protocol === 'https:';

    if (isLocalDev) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      });

      if ('caches' in window) {
        caches.keys().then((keys) => {
          keys.forEach((key) => caches.delete(key));
        });
      }

      return;
    }

    if (!isSecureContext) return;

    const register = () => {
      navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' }).catch((error) => {
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
