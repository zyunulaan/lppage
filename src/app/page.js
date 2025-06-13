'use client';
import { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import InteractiveDemo from '../components/InteractiveDemo';
import FAQ from '../components/FAQ';
import PainPoints from '../components/PainPoints';
import Roadmap from '../components/Roadmap';
import BetaSignup from '../components/BetaSignup';
import Footer from '../components/Footer';

export default function Home() {
  const mainRef = useRef(null);
  const interactiveDemoRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;
    const interactiveDemo = interactiveDemoRef.current;
    if (!main || !interactiveDemo) return;

    const handleWheel = (e) => {
      const demoRect = interactiveDemo.getBoundingClientRect();
      const isInDemo = e.clientY >= demoRect.top && e.clientY <= demoRect.bottom;
      
      if (isInDemo) {
        const leftSection = interactiveDemo.querySelector('div > div:first-child');
        if (!leftSection) return;

        const { scrollTop, scrollHeight, clientHeight } = leftSection;
        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight;

        // If we're at the top and scrolling up, or at the bottom and scrolling down,
        // allow the main page to scroll
        if ((isAtTop) || (isAtBottom && e.deltaY > 0)) {
          return;
        }

        // Otherwise, prevent the main page from scrolling
        e.preventDefault();
        leftSection.scrollTop += e.deltaY;
      }
    };

    main.addEventListener('wheel', handleWheel, { passive: false });
    return () => main.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main 
        ref={mainRef}
        style={{
          fontFamily: "'Noto Sans JP', sans-serif"
        }}
      >
        <Navigation />
        <Hero />
        <PainPoints />
        <Features />
        <div ref={interactiveDemoRef}>
          <InteractiveDemo />
        </div>
        <Roadmap />
        <BetaSignup />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
