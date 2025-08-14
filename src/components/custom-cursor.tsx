'use client';

import { useEffect } from 'react';

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div id="custom-cursor" />;
}
