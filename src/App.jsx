import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  );
}
