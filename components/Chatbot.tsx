'use client';

import { useState, useRef, KeyboardEvent } from 'react';

interface ChatMessage {
  text: string;
  isUser: boolean;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: '> system_initialization: success', isUser: false },
    {
      text: "Hello. I'm the AI assistant. Ask me about skills, projects, or how to contact.",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatContentRef = useRef<HTMLDivElement>(null);

  const addMessage = (text: string, isUser: boolean) => {
    setMessages((prev) => [...prev, { text, isUser }]);
    setTimeout(() => {
      if (chatContentRef.current) {
        chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const input = inputValue.toLowerCase();
      addMessage(inputValue, true);
      setInputValue('');

      // Simulated AI Responses
      setTimeout(() => {
        if (input.includes('skill')) {
          addMessage(
            'I specialize in React, GSAP, Three.js, and Next.js for creative development.',
            false
          );
        } else if (input.includes('work') || input.includes('project')) {
          addMessage('You can view my selected works in the horizontal scroll section above.', false);
        } else if (input.includes('contact') || input.includes('email')) {
          addMessage(
            'Send a brief to rolandoremolacio.com or use the contact form below.',
            false
          );
        } else if (input.includes('hello') || input.includes('hi')) {
          addMessage('Hello! How can I help you today?', false);
        } else {
          addMessage("Command not recognized. Try: 'skills', 'work', or 'contact'.", false);
        }
      }, 600);
    }
  };

  return (
    <div
      className={`fixed bottom-20 right-6 md:bottom-24 md:right-8 w-[90vw] md:w-[400px] h-[500px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/20 z-[60] rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'translate-y-0' : 'translate-y-[120%]'
      }`}
    >
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-50">
          System Console v1.0.4
        </span>
        <button
          onClick={onClose}
          className="hover-target text-2xl opacity-50 hover:opacity-100 transition-opacity"
        >
          ×
        </button>
      </div>

      <div
        ref={chatContentRef}
        className="flex-1 overflow-y-auto p-6 font-mono text-sm space-y-4 scroll-smooth"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-msg ${
              msg.isUser ? 'text-white/40 text-right' : msg.text.startsWith('>') ? 'text-white/40 italic' : 'text-white/90'
            }`}
          >
            {!msg.isUser && !msg.text.startsWith('>') && '> '}
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10 bg-white/5 flex gap-3">
        <span className="font-mono text-white/40 self-center tracking-tighter">CMD_&gt;</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="bg-transparent border-none outline-none flex-1 font-mono text-xs uppercase tracking-widest text-white placeholder:opacity-20"
        />
      </div>
    </div>
  );
}
