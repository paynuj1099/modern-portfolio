'use client';

import { useEffect, useRef } from 'react';

export function useSoundEffects() {
  const soundsRef = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    // Preload sound effects
    soundsRef.current = {
      whoosh: new Audio('/sounds/whoosh.mp3'),
      click: new Audio('/sounds/click.mp3'),
      hover: new Audio('/sounds/hover.mp3'),
    };

    // Set volumes
    Object.values(soundsRef.current).forEach((audio) => {
      audio.volume = 0.3;
    });

    return () => {
      // Cleanup
      Object.values(soundsRef.current).forEach((audio) => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);

  const playSound = (soundName: 'whoosh' | 'click' | 'hover') => {
    const audio = soundsRef.current[soundName];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Ignore autoplay errors
      });
    }
  };

  return { playSound };
}
