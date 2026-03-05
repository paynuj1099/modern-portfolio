'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { generateHoverSound, playGeneratedSound } from '@/utils/soundGenerator';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Assisteon Staffing',
    category: '.NET Core / Razor Pages / SEO',
    image: '/images/projects/assisteon_staffing.png',
    link: 'https://assisteonstaffing.com/',
    tags: ['Live', 'Frontend', 'Web'],
  },
  {
    title: 'Product Landing Page',
    category: 'React / TypeScript / Three.js',
    image: '/images/projects/product_landing_page.png',
    link: 'https://productlandingpage-ten.vercel.app/',
    tags: ['Live', 'Frontend', '3D'],
  },
  {
    title: 'Portfolio Design',
    category: 'Next.js / Tailwind CSS / Vercel',
    image: '/images/projects/portfolio_design.png',
    link: 'https://rolandoremolacio.com/',
    tags: ['Live', 'Frontend', 'Design'],
  },
];

export default function WorkSection() {
  const hoverSoundRef = useRef<AudioBuffer | null>(null);
  
  useEffect(() => {
    // Generate hover sound
    hoverSoundRef.current = generateHoverSound();
    
    const horizontalWrap = document.querySelector('.horizontal-wrap') as HTMLElement;
    if (!horizontalWrap || window.innerWidth <= 768) return;

    gsap.to(horizontalWrap, {
      x: () => -(horizontalWrap.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '#work',
        start: 'top top',
        end: () => `+=${horizontalWrap.scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    
    // Add hover sound to project cards
    const projectCards = document.querySelectorAll('.work-card-hover');
    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        if (hoverSoundRef.current) {
          playGeneratedSound(hoverSoundRef.current, 0.25);
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === '#work') {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      id="work"
      className="overflow-hidden bg-void relative h-screen flex items-center"
    >
      <div className="horizontal-wrap px-4 sm:px-6 md:px-20 gap-8 sm:gap-12 md:gap-20 items-center">
        <div className="w-full md:w-[50vw] flex-shrink-0 md:pr-20 mobile-work-title tablet-work-title">
          <h2 className="font-syne text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold uppercase leading-none">
            Selected
            <br />
            <span className="text-outline">Works</span>
          </h2>
          <p className="hidden md:block mt-6 text-base md:text-lg lg:text-xl font-syne tracking-widest text-light/60 italic select-none">
            Scroll &rarr; to explore the projects
          </p>
        </div>
        {projects.map((project, index) => {
          const CardContent = (
            <>
              <div className="absolute inset-0 overflow-hidden bg-black">
                <div className="absolute inset-0 scale-105 group-hover:scale-110 transition-transform duration-700 ease-out grayscale">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top brightness-75 contrast-110"
                    sizes="(max-width: 768px) 60vw, 40vw"
                    priority={index === 0}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[10px] font-manrope px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-light uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-syne text-2xl md:text-3xl xl:text-4xl font-bold mb-2 leading-tight tracking-tight text-light">
                  {project.title}
                </h3>
                <p className="text-light/50 text-xs md:text-sm font-manrope mb-4 tracking-wide">{project.category}</p>
                {project.link && (
                  <div className="flex items-center gap-2 text-light/70 group-hover:text-light transition-colors duration-300">
                    <span className="text-xs md:text-sm font-manrope uppercase tracking-wider">
                      View Project
                    </span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          );

          return project.link ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`work-card-hover w-[75vw] md:w-[45vw] lg:w-[40vw] h-[65vh] md:h-[70vh] flex-shrink-0 relative group hover-target overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/30 mobile-work-card tablet-work-card cursor-pointer ${
                index === projects.length - 1 ? 'pr-20' : ''
              }`}
            >
              {CardContent}
            </a>
          ) : (
            <div
              key={index}
              className={`work-card-hover w-[75vw] md:w-[45vw] lg:w-[40vw] h-[65vh] md:h-[70vh] flex-shrink-0 relative group hover-target overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/30 mobile-work-card tablet-work-card ${
                index === projects.length - 1 ? 'pr-20' : ''
              }`}
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
