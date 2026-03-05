# Modern Portfolio

A modern, Next.js-based portfolio website with smooth animations and interactive elements.

## Features

- 🎨 **Modern Design**: Clean and minimalistic design with custom animations
- ⚡ **Next.js 14**: Built with the latest Next.js App Router
- 🎭 **GSAP Animations**: Smooth scroll and advanced animations using GSAP
- 🎯 **TypeScript**: Fully typed for better developer experience
- 💅 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 🖱️ **Custom Cursor**: Interactive custom cursor (desktop only)
- 📱 **Responsive**: Fully responsive design for all screen sizes
- 🤖 **Interactive Chatbot**: Built-in chatbot for visitor interaction
- 🎬 **Smooth Scroll**: Lenis smooth scroll implementation
- 🎪 **Section Pinning**: Advanced scroll-triggered animations

## Project Structure

```
modern-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles and animations
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── MarqueeSection.tsx
│   │   └── ContactSection.tsx
│   ├── CustomCursor.tsx     # Custom cursor component
│   ├── Loader.tsx           # Loading screen
│   ├── Navigation.tsx       # Bottom navigation
│   ├── NoiseBackground.tsx  # Film grain effect
│   └── Chatbot.tsx          # Interactive chatbot
├── hooks/
│   └── useAnimations.ts     # Animation hooks (smooth scroll, pinning)
└── public/                  # Static assets

```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling
- **React** - UI library

## Components Overview

### UI Components
- **CustomCursor**: Desktop-only custom cursor with hover effects
- **Loader**: Animated loading screen with progress bar
- **Navigation**: Magnetic floating navigation bar
- **NoiseBackground**: Film grain overlay effect

### Section Components
- **HeroSection**: Landing section with parallax effect
- **AboutSection**: Introduction and mindset
- **ExperienceSection**: Professional journey timeline
- **SkillsSection**: Technical skills showcase
- **WorkSection**: Horizontal scrolling project gallery
- **MarqueeSection**: Infinite scrolling tech stack
- **ContactSection**: Contact form with animations

### Interactive Components
- **Chatbot**: AI-like assistant for visitor interaction

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  void: '#000000',
  light: '#f4f4f5',
}
```

### Fonts
Fonts are loaded from Google Fonts in `app/layout.tsx`:
- Syne (headings)
- Manrope (body text)

### Content
Edit the section components in `components/sections/` to update content:
- Experience data in `ExperienceSection.tsx`
- Skills in `SkillsSection.tsx`
- Projects in `WorkSection.tsx`

## Performance Optimizations

- Custom cursor only loads on desktop devices
- Smooth scroll disabled on mobile for better performance
- Lazy loading of components
- Optimized animations with GSAP
- Film grain effect uses CSS animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
