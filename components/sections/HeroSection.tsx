'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const rafId = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hero parallax effect - Desktop only
    if (window.innerWidth > 1024) {
      const heroText = document.querySelector('.hero-text-wrapper') as HTMLElement;
      if (!heroText) return;

      const updateParallax = () => {
        const x = mousePos.current.x;
        const y = mousePos.current.y;
        gsap.to(heroText, { 
          x: x, 
          y: y, 
          duration: 1, 
          ease: 'power1.out',
          force3D: true
        });
      };

      const handleMouseMove = (e: MouseEvent) => {
        mousePos.current = {
          x: (window.innerWidth / 2 - e.pageX) / 40,
          y: (window.innerHeight / 2 - e.pageY) / 40
        };

        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }
        
        rafId.current = requestAnimationFrame(updateParallax);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      return () => {
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <header
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 hero-noise-bg" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-transparent to-black pointer-events-none z-20"></div>
      <div className="text-center z-10 hero-text-wrapper">
        <div className="flex items-center justify-center mb-6">
          <span
            className="relative flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-syne uppercase tracking-widest text-light/90 shadow-sm"
            style={{ backdropFilter: 'blur(2px)' }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-light mr-2 animate-blink"></span>
            Open for freelance work!
          </span>
        </div>
        <h1 className="font-syne text-[8vw] leading-none font-extrabold uppercase tracking-tighter mix-blend-difference">
          Rolando
          <br />
          <span className="text-outline">Remolacio</span>
        </h1>
        <p className="mt-6 text-sm md:text-lg lg:text-xl font-light opacity-60 max-w-md mx-auto px-4">
          Crafting digital experiences that bridge the gap between aesthetics and engineering.
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px] -z-10"></div>
    </header>
  );
}
