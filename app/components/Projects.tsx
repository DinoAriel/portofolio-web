'use client';

import React from 'react';

// Reusable Project Card using STAR Method
interface ProjectProps {
  title: string;
  subtitle: string;
  tags: string[];
  duration: string;
  location: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  codeLink: string;
  demoLink: string;
}

function ProjectCard({
  title,
  subtitle,
  tags,
  duration,
  location,
  situation,
  task,
  action,
  result,
  codeLink,
  demoLink,
}: ProjectProps) {
  return (
    <div className="rounded-2xl p-6 md:p-8 bg-zinc-950/40 border border-zinc-800/80 hover:border-zinc-700/80 backdrop-blur-sm transition-all duration-300 group shadow-xl shadow-black/25 flex flex-col gap-6 relative overflow-hidden">
      {/* Dynamic Backing Ambient Light */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-900 pb-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl md:text-2xl font-extrabold text-white">
              {title}
            </h3>
            <span className="text-xs font-black text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
              {subtitle}
            </span>
          </div>

          {/* Location & Time info */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-500 mt-2">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {duration}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </span>
          </div>
        </div>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* STAR Method Matrix */}
      <div className="grid md:grid-cols-2 gap-6 pt-2">
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-xs text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center">
              <span className="bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded text-[10px] font-black mr-2">
                SITUATION
              </span>
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {situation}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center">
              <span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded text-[10px] font-black mr-2">
                TASK
              </span>
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {task}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-xs text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center">
              <span className="bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded text-[10px] font-black mr-2">
                ACTION
              </span>
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {action}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs text-zinc-500 uppercase tracking-widest mb-1.5 flex items-center">
              <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-black mr-2">
                RESULT
              </span>
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {result}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-6 border-t border-zinc-900 mt-auto">
        <a
          href={codeLink}
          className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 hover:border-zinc-600 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
          </svg>
          View Code
        </a>
        <a
          href={demoLink}
          className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 hover:border-zinc-600 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const projectsData = [
    {
      title: 'Sela',
      subtitle: 'Mobile Application',
      tags: ['Flutter', 'Figma', 'Agile Project Management'],
      duration: '2026 - Sekarang',
      location: 'Politeknik Elektronika Negeri Surabaya',
      situation: 'Koordinasi tugas kelompok dan individu sering kali tidak terstruktur dan kurang terpantau secara real-time.',
      task: 'Memimpin tim pengembang sebagai Product Owner & Project Lead dalam merancang solusi manajemen tugas terpadu.',
      action: 'Mengoordinasikan alur kerja tim, mengelola backlog produk, merancang UI/UX yang intuitif, serta berpartisipasi dalam pengembangan frontend.',
      result: 'Berhasil mengembangkan aplikasi mobile \'Sela\', platform manajemen tugas terpadu yang meningkatkan efisiensi kolaborasi kelompok dan individu.',
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'Setaradidik',
      subtitle: 'Web Application',
      tags: ['React', 'JavaScript', 'CSS', 'Figma'],
      duration: '2025',
      location: 'Politeknik Elektronika Negeri Surabaya',
      situation: 'Akses pembelajaran online konvensional masih kurang bersahabat dan belum mendukung kebutuhan penyandang disabilitas.',
      task: 'Membangun platform pembelajaran inklusif yang ramah disabilitas guna mendukung kesetaraan pendidikan digital.',
      action: 'Merancang antarmuka ramah disabilitas (UI/UX) dan mengembangkan platform web agar responsif serta ramah aksesibilitas.',
      result: 'Meluncurkan platform \'Setaradidik\', platform pembelajaran inklusif guna mendukung kesetaraan pendidikan digital.',
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'Temuin',
      subtitle: 'Web Application',
      tags: ['Laravel', 'PHP', 'SQL', 'JavaScript'],
      duration: '2025',
      location: 'Politeknik Elektronika Negeri Surabaya',
      situation: 'Pelaku UMKM di sekitar area kampus PENS kesulitan mendigitalisasi usahanya untuk menjangkau pasar mahasiswa secara efektif.',
      task: 'Mendigitalisasi bisnis UMKM lokal sekitar area kampus untuk memperluas jangkauan pasar secara efektif.',
      action: 'Mengembangkan aplikasi web marketplace lokal untuk memfasilitasi katalog produk, transaksi, dan promosi digital.',
      result: 'Meningkatkan eksposur dan memperluas jangkauan pasar UMKM lokal secara efisien di lingkungan kampus PENS.',
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'Digiskill',
      subtitle: 'Web Application',
      tags: ['React', 'Laravel', 'SQL', 'Agile'],
      duration: '2025',
      location: 'Politeknik Elektronika Negeri Surabaya',
      situation: 'Program pembinaan kewirausahaan berbasis prestasi membutuhkan wadah monitoring kompetensi siswa yang terstruktur.',
      task: 'Mengelola operasional program mentoring sebagai Chief Operating Officer (COO) serta mengawal pengembangan platform.',
      action: 'Mengelola mentoring siswa, merancang alur sistem monitoring kompetensi siswa, dan membantu pengembangan platform web.',
      result: 'Meluncurkan platform \'Digiskill\' yang berhasil meningkatkan kemampuan problem solving, inovasi, dan kompetensi kewirausahaan siswa di sekolah.',
      codeLink: '#',
      demoLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-black relative border-t border-zinc-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto font-light tracking-widest uppercase">
            Studi kasus proyek dengan metode STAR (Situation, Task, Action, Result)
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="grid gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
