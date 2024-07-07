'use client';

// preload.tsx
import { useEffect } from 'react';

export function PreloadResources() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = '../public/sprite.svg'; // Adjust the path relative to the root (/)
    link.rel = 'preload';
    link.as = 'image';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
}
