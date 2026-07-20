'use client';

export function getDeviceFingerprint(): string {
  if (typeof window === 'undefined') return 'ssr';

  // Try to generate a stable-ish fingerprint from browser data
  const nav = window.navigator;
  const screen = window.screen;
  const components = [
    nav.userAgent,
    nav.language,
    screen.width,
    screen.height,
    screen.colorDepth,
    new Date().getTimezoneOffset(),
    nav.hardwareConcurrency ? nav.hardwareConcurrency : '',
    nav.platform,
  ];

  // Simple hash function
  const str = components.join('||');
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36) + Date.now().toString(36);
}
