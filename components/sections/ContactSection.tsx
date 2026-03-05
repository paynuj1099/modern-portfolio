'use client';

import { useEffect, useRef, FormEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { generateClickSound, playGeneratedSound } from '@/utils/soundGenerator';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const clickSoundRef = useRef<AudioBuffer | null>(null);
  
  useEffect(() => {
    // Generate click sound
    clickSoundRef.current = generateClickSound();
    
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.addEventListener('input', function (this: HTMLTextAreaElement) {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
      });
    }

    // Set initial state
    const formDivs = document.querySelectorAll('#contact-form > div');
    gsap.set(formDivs, { y: 30, opacity: 0 });
    
    // Animate to visible
    gsap.to(formDivs, {
      scrollTrigger: { trigger: '#contact-form', start: 'top 80%' },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });
    
    // Add click sound to all links and buttons
    const clickables = document.querySelectorAll('#contact a, #contact button');
    clickables.forEach((el) => {
      el.addEventListener('click', () => {
        if (clickSoundRef.current) {
          playGeneratedSound(clickSoundRef.current, 0.3);
        }
      });
    });
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Play sound
    if (clickSoundRef.current) {
      playGeneratedSound(clickSoundRef.current, 0.4);
    }
    
    const btn = e.currentTarget.querySelector('button');
    if (btn) {
      btn.innerHTML =
        '<span class="relative z-10 font-syne text-xl uppercase font-bold text-void">Message Sent</span>';
      gsap.to(btn, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 });
    }
  };

  return (
    <footer
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 py-16 md:py-32 text-center overflow-hidden"
    >
      <div className="w-full max-w-4xl mx-auto px-2">
        <h2 className="font-syne text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none mb-12 md:mb-16 lg:mb-20">
          Let&apos;s
          <br />
          <span className="text-outline">Connect</span>
        </h2>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-left mb-24"
        >
          <div className="relative border-b border-white/20 pb-4 focus-within:border-white transition-colors">
            <label htmlFor="name" className="block font-syne text-xs uppercase opacity-40 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="JOHN DOE"
              className="bg-transparent w-full font-syne text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase outline-none placeholder:opacity-40 focus:placeholder:opacity-0 transition-all text-light"
            />
          </div>
          <div className="relative border-b border-white/20 pb-4 focus-within:border-white transition-colors">
            <label htmlFor="email" className="block font-syne text-xs uppercase opacity-40 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="HELLO@DOMAIN.COM"
              className="bg-transparent w-full font-syne text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase outline-none placeholder:opacity-40 focus:placeholder:opacity-0 transition-all text-light"
            />
          </div>
          <div className="relative border-b border-white/20 pb-4 focus-within:border-white transition-colors md:col-span-2">
            <label htmlFor="message" className="block font-syne text-xs uppercase opacity-40 mb-2">
              Project Brief
            </label>
            <textarea
              id="message"
              name="message"
              rows={1}
              placeholder="TELL ME ABOUT THE PROJECT"
              className="bg-transparent w-full font-syne text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase outline-none placeholder:opacity-40 focus:placeholder:opacity-0 transition-all resize-none text-light"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center mt-8">
            <button
              type="submit"
              className="hover-target group relative overflow-hidden px-12 py-6 border border-white/20 rounded-full transition-all hover:border-white"
            >
              <span className="relative z-10 font-syne text-xl uppercase font-bold group-hover:text-void transition-colors duration-300">
                Send Message
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center gap-4 pt-12 border-t border-white/10">
          <a 
            href="https://rolandoremolacio.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover-target font-syne text-xl md:text-3xl lg:text-4xl font-bold uppercase hover:text-outline transition-all"
          >
            rolandoremolacio.com
          </a>
          <div className="flex gap-8 text-sm uppercase tracking-widest opacity-60 mt-2 mb-16">
            <a 
              href="https://github.com/paynuj1099" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target hover:opacity-100"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/rolando-remolacio" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target hover:opacity-100"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:rolandojrremolacio@gmail.com" 
              className="hover-target hover:opacity-100"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
