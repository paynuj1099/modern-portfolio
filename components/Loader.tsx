'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { generateWhooshSound, playGeneratedSound } from '@/utils/soundGenerator';

export default function Loader() {
  const whooshSoundRef = useRef<HTMLAudioElement | null>(null);
  const generatedSoundRef = useRef<AudioBuffer | null>(null);
  const useGeneratedSound = useRef(false);
  
  useEffect(() => {
    // Initialize sound effect
    whooshSoundRef.current = new Audio('/sounds/whoosh.mp3');
    whooshSoundRef.current.volume = 0.4;
    
    // Handle audio load error - use generated sound as fallback
    whooshSoundRef.current.addEventListener('error', () => {
      useGeneratedSound.current = true;
      generatedSoundRef.current = generateWhooshSound();
    });
    
    const loaderBar = document.getElementById('loader-bar') as HTMLElement;
    const loaderPerc = document.getElementById('loader-perc') as HTMLElement;
    const loaderName = document.getElementById('loader-name') as HTMLElement;
    const loader = document.getElementById('loader') as HTMLElement;

    if (!loaderBar || !loaderPerc || !loaderName || !loader) return;

    // Position cursor at the "I" in "R. Remolacio" initially
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;
    
    if (cursorDot && cursorOutline) {
      // Calculate position after a short delay to ensure text is rendered
      setTimeout(() => {
        const nameRect = loaderName.getBoundingClientRect();
        // Position cursor above the "I" in "RemolaciO" (approximately 85% across the text)
        const cursorX = nameRect.left + nameRect.width * 0.876;
        const cursorY = nameRect.top - 72; // Slightly above the text
        
        gsap.set(cursorDot, { 
          x: cursorX, 
          y: cursorY,
          opacity: 1 
        });
        gsap.set(cursorOutline, { 
          x: cursorX, 
          y: cursorY,
          opacity: 1 
        });
      }, 100);
    }

    // Set initial state for hero text
    gsap.set('.hero-text-wrapper', { y: 100, opacity: 0 });

    const progress = { value: 0 };
    const tl = gsap.timeline();

    tl.to(loaderName, {
      y: 0,
      duration: 1,
      ease: 'power4.out',
      delay: 0.2,
    })
      .to(
        progress,
        {
          value: 100,
          duration: 2.5,
          ease: 'power2.inOut',
          onUpdate: () => {
            const p = Math.floor(progress.value);
            loaderBar.style.width = p + '%';
            loaderPerc.innerText = p + '%';
          },
        },
        '-=0.5'
      )
      .to(
        [loaderName, loaderBar.parentElement, loaderPerc],
        {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: 'power4.in',
          stagger: 0.1,
        }
      )
      .to(loader, {
        yPercent: -100,
        duration: 1.2,
        ease: 'expo.inOut',
        onStart: () => {
          // Play whoosh sound when loader slides up
          if (useGeneratedSound.current && generatedSoundRef.current) {
            playGeneratedSound(generatedSoundRef.current, 0.4);
          } else if (whooshSoundRef.current) {
            whooshSoundRef.current.play().catch(() => {
              // If audio file fails, use generated sound
              if (!generatedSoundRef.current) {
                generatedSoundRef.current = generateWhooshSound();
              }
              playGeneratedSound(generatedSoundRef.current, 0.4);
            });
          }
        },
        onComplete: () => {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          if (window.location.hash && window.location.hash !== '#home') {
            history.replaceState(null, '', '#home');
          }
          // Remove loader from DOM after animation
          loader.style.display = 'none';
        },
      })
      .to(
        '.hero-text-wrapper',
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
        },
        '-=0.5'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      id="loader"
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="relative overflow-hidden mb-4 text-center">
        <h1
          id="loader-name"
          className="font-syne text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-tighter translate-y-full"
        >
          R. Remolacio
        </h1>
      </div>
      <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
        <div id="loader-bar" className="absolute top-0 left-0 h-full bg-white w-0"></div>
      </div>
      <div
        id="loader-perc"
        className="font-mono text-[10px] mt-4 opacity-40 uppercase tracking-widest text-center"
      >
        0%
      </div>
    </div>
  );
}
