'use client';

import { useState } from 'react';
import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';
import NoiseBackground from '@/components/NoiseBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import WorkSection from '@/components/sections/WorkSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import ContactSection from '@/components/sections/ContactSection';
import Chatbot from '@/components/Chatbot';
import { useSmoothScroll, useScrollPinning } from '@/hooks/useAnimations';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useSmoothScroll();
  useScrollPinning();

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <main>
      <Loader />
      <CustomCursor />
      <NoiseBackground />
      <Navigation onChatToggle={toggleChat} />

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <WorkSection />
      <MarqueeSection />
      <ContactSection />

      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  );
}
