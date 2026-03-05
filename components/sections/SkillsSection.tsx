'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    id: '01',
    title: 'Backend Mastery',
    description:
      '.NET, C#, VB.Net, Node.js, and REST APIs for robust, scalable server-side architecture.',
  },
  {
    id: '02',
    title: 'Frontend Excellence',
    description:
      'React, Next.js, TypeScript, Blazor, and Tailwind CSS, GSAP for modern, responsive user interfaces.',
  },
  {
    id: '03',
    title: 'Database Engineering',
    description:
      'MS SQL Server, MySQL, database design, and optimization for efficient data management.',
  },
  {
    id: '04',
    title: 'DevOps & Cloud',
    description:
      'Azure DevOps, CI/CD pipelines, Git, and modern deployment strategies for seamless delivery.',
  },
];

export default function SkillsSection() {
  useEffect(() => {
    // Set initial state
    gsap.set('.skill-item', { y: 50, opacity: 0 });
    
    // Animate to visible
    gsap.to('.skill-item', {
      scrollTrigger: { trigger: '#skills', start: 'top 80%' },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
    });

    // Tablet touch interaction
    if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
      const skillItems = document.querySelectorAll('.skill-item');
      skillItems.forEach((item) => {
        let isExpanded = false;
        item.addEventListener('click', () => {
          const content = item.querySelector('div:last-child') as HTMLElement;
          if (isExpanded) {
            content.style.maxHeight = '0';
            isExpanded = false;
          } else {
            content.style.maxHeight = '10rem';
            isExpanded = true;
          }
        });
      });
    }
  }, []);

  return (
    <section id="skills" className="w-full px-4 sm:px-6 md:px-20 py-16 md:py-32 bg-void overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
        <h2 className="font-syne text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none">
          Technical
          <br />
          <span className="text-outline">Toolkit</span>
        </h2>
        <p className="max-w-xs text-sm opacity-50 uppercase tracking-widest mt-6 md:mt-0">
          Full-stack expertise in modern .NET and JavaScript ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`skill-item group border-b border-white/10 py-10 flex flex-col hover-target ${
              index % 2 === 1 ? 'md:pl-10' : ''
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-xs opacity-40 font-mono">{skill.id}</span>
              <h3 className="font-syne text-3xl md:text-4xl lg:text-5xl uppercase group-hover:italic transition-all duration-300">
                {skill.title}
              </h3>
            </div>
            <div className="mt-6 max-h-40 md:max-h-0 overflow-hidden md:group-hover:max-h-40 lg:group-hover:max-h-40 transition-all duration-500">
              <p className="text-lg opacity-60">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
