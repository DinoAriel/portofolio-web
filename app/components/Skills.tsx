'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Reusable Skill Badge Component
function SkillBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-md hover:border-indigo-500/50 hover:bg-zinc-800/80 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 cursor-default group">
      <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] group-hover:scale-150 transition-transform duration-300" />
      <span className="text-sm md:text-base text-zinc-300 font-medium whitespace-nowrap group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}

// Reusable Bento Stat Card
function BentoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ 
        y: -5,
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/60 shadow-sm transition-all duration-300 cursor-default"
    >
      <p className="text-2xl font-black text-indigo-600 mb-1">{title}</p>
      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{desc}</p>
    </motion.div>
  );
}

export default function Skills() {
  const row1 = ['PHP', 'JavaScript', 'Dart', 'SQL', 'PHP', 'JavaScript', 'Dart', 'SQL'];
  const row2 = ['Flutter', 'React Native', 'Laravel', 'Figma', 'Git / GitHub', 'Flutter', 'React Native', 'Laravel', 'Figma', 'Git / GitHub'];
  const row3 = ['Agile Project Management', 'Leadership', 'Problem Solving', 'Team Collaboration', 'Agile Project Management', 'Leadership', 'Problem Solving', 'Team Collaboration']; 

  return (
    <div className="bg-black">
      {/* Injeksi CSS untuk animasi Marquee agar langsung jalan tanpa config Tailwind */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .marquee-container:hover .animate-scroll-left,
        .marquee-container:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. Curved White Container ("ABOUT ME") */}
      <section id="skills" className="relative min-h-screen flex items-center bg-black overflow-hidden py-32 pb-40">
        
        {/* Background Oval Curve (White) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-white overflow-hidden z-0 shadow-[0_-20px_50px_rgba(255,255,255,0.05)]"
          style={{
            top: 0,
            width: '150%',
            height: '100%',
            borderRadius: '50% 50% 50% 50% / 10% 10% 10% 10%',
          }}
        >
          {/* Subtle grid pattern & Watermark */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Giant Background Text */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 text-[15rem] font-black text-zinc-900/5 tracking-tighter pointer-events-none select-none">
            ABOUT
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
            
            {/* Left: Picture and Socials */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-8 group">
                {/* Decorative glowing dots behind avatar */}
                <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/30 transition-all duration-500" />
                
                {/* Profile Photo Container */}
                <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full bg-white border-4 border-zinc-100 p-2 shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="/profile.jpg" 
                      alt="Dino Ariel Ihsan Saputra" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-zinc-950 mb-1 tracking-tight text-center">
                Dino Ariel Ihsan Saputra
              </h3>
              <p className="text-sm md:text-base font-bold text-indigo-600 mb-8 tracking-widest uppercase text-center">
                Product Owner &amp; Software Engineer
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {/* Icons kept same, just updated hover colors for consistency */}
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-zinc-200 text-zinc-500 hover:text-black hover:border-black hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-zinc-200 text-zinc-500 hover:text-indigo-600 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-zinc-200 text-zinc-500 hover:text-rose-500 hover:border-rose-500 hover:bg-rose-50 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </motion.div>

            {/* Right: Biography Text & Bento Stats */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-zinc-800"
            >
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-4xl md:text-6xl font-black text-zinc-950 mb-8 tracking-tight"
              >
                Get to know me.
              </motion.h2>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="space-y-6 text-base md:text-lg leading-relaxed text-zinc-600 mb-10"
              >
                <p>
                  Saya adalah mahasiswa semester 4 <span className="font-bold text-zinc-900 bg-zinc-100 px-1.5 py-0.5 rounded">Diploma 3 Teknik Informatika</span> di Politeknik Elektronika Negeri Surabaya (PENS) dengan IPK 3.60/4.0.
                </p>
                <p>
                  Memiliki fokus mendalam pada <span className="font-bold text-zinc-900 border-b-2 border-indigo-500">Software Engineering</span>. Saya berpengalaman sebagai Product Owner dalam memimpin tim pengembangan aplikasi dan mengoordinasikan alur kerja tim.
                </p>
                <p>
                  Saya menguasai keahlian teknis dalam <span className="italic text-zinc-800 font-medium">Web & Mobile Programming</span> untuk memastikan seluruh proyek dapat diselesaikan secara efisien dan tepat waktu.
                </p>
              </motion.div>

              {/* Bento Stats Grid */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                <BentoCard title="3.60 / 4.0" desc="IPK Pendidikan" />
                <BentoCard title="Software" desc="Fokus Utama" />
                <BentoCard title="Agile PO" desc="Metodologi" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Tech Arsenal Infinite Ticker (Black Background) */}
      <section className="py-32 bg-black relative overflow-hidden border-t border-zinc-900">
        
        {/* Glow accent behind tickers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 px-4 relative z-10"
        >
          <h2 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 tracking-tighter uppercase mb-4">
            Tech Arsenal
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light tracking-[0.3em] uppercase">
            Frameworks &amp; Tools Stack
          </p>
        </motion.div>

        {/* Scrolling Tickers Rows */}
        <div className="space-y-6 relative z-10 flex flex-col items-center overflow-hidden">
          
          {/* Row 1: Left Scroll */}
          <div className="marquee-container relative w-[200vw] md:w-[150vw]">
            <div className="flex animate-scroll-left w-[200%] gap-4">
              <div className="flex gap-4 w-1/2 justify-around">
                {row1.map((skill, index) => <SkillBadge key={`${skill}-${index}`} name={skill} />)}
              </div>
              <div className="flex gap-4 w-1/2 justify-around">
                {row1.map((skill, index) => <SkillBadge key={`${skill}-${index}-dup`} name={skill} />)}
              </div>
            </div>
          </div>

          {/* Row 2: Right Scroll */}
          <div className="marquee-container relative w-[200vw] md:w-[150vw] -ml-[50vw]">
            <div className="flex animate-scroll-right w-[200%] gap-4">
              <div className="flex gap-4 w-1/2 justify-around">
                {row2.map((skill, index) => <SkillBadge key={`${skill}-${index}`} name={skill} />)}
              </div>
              <div className="flex gap-4 w-1/2 justify-around">
                {row2.map((skill, index) => <SkillBadge key={`${skill}-${index}-dup`} name={skill} />)}
              </div>
            </div>
          </div>

          {/* Row 3: Left Scroll */}
          <div className="marquee-container relative w-[200vw] md:w-[150vw] ml-[10vw]">
            <div className="flex animate-scroll-left w-[200%] gap-4">
              <div className="flex gap-4 w-1/2 justify-around">
                {row3.map((skill, index) => <SkillBadge key={`${skill}-${index}`} name={skill} />)}
              </div>
              <div className="flex gap-4 w-1/2 justify-around">
                {row3.map((skill, index) => <SkillBadge key={`${skill}-${index}-dup`} name={skill} />)}
              </div>
            </div>
          </div>

          {/* Vignette Fade overlays to hide edges perfectly */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />
        </div>
      </section>
    </div>
  );
}