'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900/60 py-8 text-center text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} <span className="text-zinc-300 font-semibold">dinoariel.</span> All rights reserved.
        </div>
        <div className="flex gap-4">
          <span className="text-zinc-600">Built with</span>
          <span className="text-indigo-400 font-semibold">Next.js 16</span>
          <span className="text-zinc-600">&</span>
          <span className="text-cyan-400 font-semibold">Tailwind CSS v4</span>
        </div>
      </div>
    </footer>
  );
}
