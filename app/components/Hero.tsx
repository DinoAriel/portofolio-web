'use client';

import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Subtle grid backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="mb-6">
          <span className="text-zinc-500 text-sm md:text-base font-light tracking-[0.4em] uppercase">
            Hello, World
          </span>
        </div>
        <h1 className="mb-8 text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.9]">
          Hi, I'm Dino
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 font-light tracking-[0.18em] uppercase max-w-3xl mx-auto leading-relaxed">
          Product Owner &amp; Engineer
        </p>

        {/* Small PENS note */}
        <div className="mt-12 text-zinc-600 text-xs sm:text-sm font-light tracking-widest uppercase flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
          Politeknik Elektronika Negeri Surabaya
        </div>
      </div>
    </section>
  );
}
