'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: 'Dec 2025 — Present',
    title: 'Full Stack Developer',
    description:
      'Contributing to AI-powered features, microservices architecture, .NET backend systems, subscription services, and modern Blazor frontends.',
    company: 'Practice AI',
  },
  {
    period: 'Apr 2025 — Dec 2025',
    title: 'Programmer Analyst',
    description:
      'Full-stack development using .NET, C#, JavaScript, and React. Built enterprise applications with Azure DevOps, MS SQL, and modern web technologies.',
    company: 'Vertere Global',
  },
  {
    period: 'May 2023 — Apr 2025',
    title: 'Assistant Engineer I',
    description:
      'Developed and maintained web applications using .NET technologies. Collaborated with cross-functional teams and contributed to process improvements.',
    company: 'ROHM Electronics',
  },
];

export default function ExperienceSection() {
  useEffect(() => {
    // Set initial state
    gsap.set('.exp-item', { x: -50, opacity: 0 });
    
    // Animate to visible
    gsap.to('.exp-item', {
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 70%',
      },
      x: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power4.out',
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full px-6 md:px-20 py-32 bg-void border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        <div className="md:w-1/3">
          <h2 className="font-syne text-4xl sm:text-5xl md:text-7xl font-bold uppercase sticky top-32">
            The
            <br />
            <span className="text-outline">Journey</span>
          </h2>
        </div>

        <div className="md:w-2/3 md:pl-12 lg:pl-20 xl:pl-32 flex flex-col">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-item group border-b border-white/10 py-12 flex flex-col md:flex-row md:items-center justify-between hover-target"
            >
              <div className="flex flex-col">
                <span className="font-mono text-xs text-white/40 mb-2 uppercase tracking-widest">
                  {exp.period}
                </span>
                <h3 className="font-syne text-2xl sm:text-3xl md:text-5xl font-bold uppercase group-hover:text-outline transition-all duration-300 break-words">
                  {exp.title}
                </h3>
                <p className="text-lg opacity-60 mt-4 max-w-lg">{exp.description}</p>
              </div>
              <div className="mt-6 md:mt-0 text-left md:text-right">
                <span className="font-syne text-xl font-semibold opacity-40 uppercase">
                  {exp.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
