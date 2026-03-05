'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function MarqueeSection() {
  useEffect(() => {
    gsap.to('.marquee-wrapper', {
      xPercent: -50,
      ease: 'none',
      duration: 15,
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-16 md:py-32 overflow-hidden border-y border-white/10">
      <div className="marquee-wrapper flex whitespace-nowrap opacity-80">
        <h1 className="font-syne text-[10vw] font-bold uppercase text-outline pr-10">
          .NET • React • C# • TypeScript • Next.js • Blazor • MS SQL • Azure DevOps •
        </h1>
        <h1 className="font-syne text-[10vw] font-bold uppercase text-outline pr-10">
          .NET • React • C# • TypeScript • Next.js • Blazor • MS SQL • Azure DevOps •
        </h1>
      </div>
    </section>
  );
}
