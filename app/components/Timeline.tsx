'use client';

import React from 'react';

export default function Timeline() {
  const experiences = [
    {
      year: '2024 - Sekarang',
      title: 'D3 Teknik Informatika',
      institution: 'Politeknik Elektronika Negeri Surabaya (PENS)',
      description: 'Fokus pada pengembangan pemahaman kuat tentang algoritma, pemrograman web modern, basis data, rekayasa perangkat lunak, serta metodologi pengembangan sistem informasi.',
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9-5 9 5 9-5-9 5zm0 0v6m0 0v6m0-6H9m3 0h3" />
        </svg>
      ),
    },
    {
      year: '2025',
      title: 'Product Owner & Lead UI/UX',
      institution: 'Proyek Himpunan Mahasiswa (HIMIT PENS)',
      description: 'Memimpin riset kebutuhan produk, merancang prioritas backlog menggunakan Agile, menyusun User Stories, dan mendesain high-fidelity mockup di Figma untuk aplikasi internal himpunan.',
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      year: '2025',
      title: 'Fullstack & UI/UX Developer',
      institution: 'Proyek Mandiri & Kontes Mahasiswa',
      description: 'Merancang arsitektur aplikasi dari nol, melakukan user testing, mendesain UI responsif, dan mengimplementasikan backend API berbasis Node.js serta database SQL.',
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-950/40 relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-3">
            Perjalanan & Pengalaman
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pendidikan & Aktivitas
          </p>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base">
            Perjalanan saya di kampus perjuangan PENS serta keterlibatan aktif dalam proyek nyata untuk mengasah kompetensi teknis dan manajerial.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-32">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="mb-12 relative pl-8 md:pl-12 group">
              {/* Year marker desktop */}
              <div className="hidden md:block absolute right-full mr-8 top-1.5 text-right w-24">
                <span className="text-xs font-black text-indigo-400 tracking-wider">
                  {exp.year}
                </span>
              </div>

              {/* Glowing Circle Icon */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors shadow-lg">
                {exp.icon}
              </div>

              {/* Year marker mobile */}
              <div className="md:hidden mb-2">
                <span className="text-xs font-black text-indigo-400 tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                  {exp.year}
                </span>
              </div>

              {/* Card Container */}
              <div className="rounded-xl bg-zinc-900/20 border border-zinc-800/60 p-6 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-900/30">
                <span className="text-xs text-zinc-500 font-semibold mb-1 block">
                  {exp.institution}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
