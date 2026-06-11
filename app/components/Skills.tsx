'use client';

import React from 'react';

// Reusable Skill Badge Component for Marquee
function SkillBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-sm hover:border-white/30 hover:bg-zinc-800/60 transition-all duration-300 cursor-default">
      <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
      <span className="text-sm md:text-base text-zinc-300 font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function Skills() {
  const row1 = ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java', 'Dart', 'PHP', 'HTML5', 'CSS3'];
  const row2 = ['Next.js', 'React', 'Tailwind CSS', 'Express.js', 'Node.js', 'Remix', 'Flutter', 'PostCSS'];
  const row3 = ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Redis', 'Git', 'Docker', 'Linux', 'Figma'];

  return (
    <div className="bg-black">
      {/* 1. Curved White Container ("ABOUT ME") */}
      <section
        id="skills"
        className="relative min-h-screen flex items-center bg-black overflow-hidden py-24 pb-32"
      >
        {/* Background Oval Curve (White) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-white overflow-hidden z-0"
          style={{
            top: 0,
            width: '150%',
            height: '100%',
            borderRadius: '50% 50% 50% 50% / 10% 10% 10% 10%',
          }}
        >
          {/* Subtle grid pattern inside white container */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-[80px] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
            
            {/* Left: Picture and Socials */}
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                {/* Decorative dots background */}
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #6366f1 2px, transparent 2px)',
                    backgroundSize: '14px 14px',
                  }}
                />
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #0891b2 2px, transparent 2px)',
                    backgroundSize: '14px 14px',
                  }}
                />

                {/* Sleek SVG Vector Profile Avatar Container */}
                <div className="relative z-10 w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-indigo-50 to-zinc-100 border border-zinc-200/80 p-2.5 shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-white">
                    <svg className="w-24 h-24 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-zinc-950 mb-1 tracking-tight text-center">
                Dino Ariel Ihsan Saputra
              </h3>
              <p className="text-sm md:text-base font-semibold text-zinc-500 mb-6 tracking-widest uppercase text-center">
                Product Owner &amp; Engineer
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-300 text-zinc-600 hover:text-zinc-950 hover:border-zinc-950 hover:bg-zinc-50 transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-300 text-zinc-600 hover:text-indigo-600 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="mailto:dinoariel@example.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-300 text-zinc-600 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50 transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Biography Text */}
            <div className="lg:pl-6 text-zinc-800">
              <h2 className="text-4xl md:text-6xl font-black text-zinc-950 mb-8 tracking-tight">
                ABOUT ME
              </h2>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-zinc-600">
                <p>
                  Saya adalah seorang mahasiswa <span className="font-extrabold text-zinc-950">Teknik Informatika</span> di <span className="font-extrabold text-zinc-950">Politeknik Elektronika Negeri Surabaya (PENS)</span>. Saya memiliki hasrat mendalam untuk berkontribusi secara signifikan pada pengembangan produk digital yang berkualitas.
                </p>
                <p>
                  Dengan pemahaman mendalam tentang <span className="font-bold text-zinc-950">Software Engineering</span> dan ketelitian visual <span className="font-bold text-zinc-950">UI/UX Engineering</span>, saya mampu merancang antarmuka yang ramah pengguna sekaligus mengimplementasikannya dalam bentuk kode yang efisien dan tangguh.
                </p>
                <p>
                  Selain itu, pengalaman saya sebagai <span className="font-bold text-zinc-950">Product Owner</span> melengkapi diri saya dengan perspektif bisnis yang kuat. Saya terbiasa memimpin proses penyusunan kebutuhan sistem (*requirements*), menyusun peta jalan produk (*product roadmaps*), serta mengawal pelaksanaannya agar selaras dengan target bisnis dan kebutuhan pengguna.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Tech Arsenal Infinite Ticker (Black Background) */}
      <section className="py-24 bg-black relative overflow-hidden flex flex-col justify-center border-t border-zinc-900">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase">
            Tech Arsenal
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 mt-3 font-light tracking-widest uppercase">
            Alat &amp; teknologi yang saya gunakan
          </p>
        </div>

        {/* Scrolling Tickers Rows */}
        <div className="space-y-4">
          {/* Row 1: Languages */}
          <div className="marquee-container relative">
            <div className="animate-marquee gap-4 flex py-1">
              {row1.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
              {/* Duplicate for seamless infinite loop */}
              {row1.map((skill) => (
                <SkillBadge key={skill + '-dup'} name={skill} />
              ))}
            </div>
            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
          </div>

          {/* Row 2: Frameworks & Libs (Scrolling reverse) */}
          <div className="marquee-container relative">
            <div className="animate-marquee-reverse gap-4 flex py-1">
              {row2.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
              {/* Duplicate for seamless infinite loop */}
              {row2.map((skill) => (
                <SkillBadge key={skill + '-dup'} name={skill} />
              ))}
            </div>
            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
          </div>

          {/* Row 3: Databases & Tools */}
          <div className="marquee-container relative">
            <div className="animate-marquee gap-4 flex py-1">
              {row3.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
              {/* Duplicate for seamless infinite loop */}
              {row3.map((skill) => (
                <SkillBadge key={skill + '-dup'} name={skill} />
              ))}
            </div>
            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>
    </div>
  );
}
