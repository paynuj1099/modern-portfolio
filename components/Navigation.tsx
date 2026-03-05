'use client';

interface NavigationProps {
  onChatToggle: () => void;
}

export default function Navigation({ onChatToggle }: NavigationProps) {
  return (
    <nav className="fixed bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 flex gap-2 sm:gap-3 md:gap-6 lg:gap-8 items-center max-w-[95vw]">
      <a
        href="#home"
        className="hover-target text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-widest uppercase font-syne opacity-70 hover:opacity-100 transition-all duration-300 ease-out"
      >
        Home
      </a>
      <a
        href="#about"
        className="hover-target text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-widest uppercase font-syne opacity-70 hover:opacity-100 transition-all duration-300 ease-out"
      >
        About
      </a>
      <a
        href="#skills"
        className="hover-target text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-widest uppercase font-syne opacity-70 hover:opacity-100 transition-all duration-300 ease-out"
      >
        Skills
      </a>
      <a
        href="#work"
        className="hover-target text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-widest uppercase font-syne opacity-70 hover:opacity-100 transition-all duration-300 ease-out"
      >
        Work
      </a>
      <a
        href="#contact"
        className="hover-target text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-widest uppercase font-syne opacity-70 hover:opacity-100 transition-all duration-300 ease-out"
      >
        Contact
      </a>
      <button
        onClick={onChatToggle}
        className="hover-target text-[9px] sm:text-[10px] md:text-xs lg:text-sm tracking-widest uppercase font-syne opacity-70 hover:opacity-100 transition-all duration-300 ease-out"
      >
        Chat
      </button>
    </nav>
  );
}
