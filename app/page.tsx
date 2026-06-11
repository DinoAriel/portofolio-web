import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* Premium Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
        {/* Hero Section */}
        <Hero />

        {/* Core Pillars (Skills) Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Experience & Timeline Section */}
        <Timeline />

        {/* Premium Contact Form Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}