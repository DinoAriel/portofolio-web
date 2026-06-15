'use client';

import React from 'react';

export default function Timeline() {
  const education = {
    institution: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    period: '2024 - 2027 (Estimasi)',
    degree: 'Diploma 3 Teknik Informatika (Web & Mobile Programming)',
    gpa: '3.60 / 4.0',
    courses: [
      'Struktur Data',
      'Pemrograman Berorientasi Objek (OOP)',
      'Basis Data',
      'UI/UX Design',
      'Mobile Programming (Android/Flutter)'
    ]
  };

  const workExperience = {
    title: 'Product Owner & Developer',
    company: 'Project Based Learning (PdBL) PENS',
    period: '2026 - Sekarang',
    roles: [
      {
        role: 'Product Owner',
        desc: 'Bertanggung jawab penuh dalam mengoordinasikan tim, menyusun backlog produk, dan memastikan setiap fase pengembangan berjalan sesuai timeline.'
      },
      {
        role: 'Fullstack Development',
        desc: 'Berperan ganda sebagai FrontEnd Engineer untuk membangun tampilan interface yang efisien dan UI/UX Designer untuk merancang antarmuka yang intuitif.'
      },
      {
        role: 'Project Lead',
        desc: 'Berhasil memimpin pengembangan aplikasi mobile \'Sela\', platform manajemen tugas untuk efisiensi kolaborasi kelompok dan individu.'
      },
      {
        role: 'Chief Operating Officer',
        desc: 'Mengelola operasional program mentoring dan kegiatan pengembangan siswa oleh aplikasi Digiskill.'
      }
    ]
  };

  const organizations = [
    {
      name: 'Society of Renewable Energy (SRE) PENS',
      role: 'Staf Ahli & Mantan Staf Muda',
      desc: 'Berkontribusi dalam riset dan pengembangan proyek energi terbarukan di lingkungan kampus.'
    },
    {
      name: 'UKM Mobil Hemat Energi (KMHE) PENS',
      role: 'Member',
      desc: 'Berpartisipasi dalam pengembangan teknologi kendaraan efisien.'
    },
    {
      name: 'UKM Dirgantara PENS',
      role: 'Member',
      desc: ''
    },
    {
      name: 'Panitia LKMM Pra TD',
      role: 'Latihan Keterampilan Manajemen Mahasiswa',
      desc: ''
    }
  ];

  return (
    <section id="experience" className="py-32 bg-zinc-950/40 relative border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#312e810a,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase">
            Resume
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto font-light tracking-widest uppercase">
            Pendidikan, Pengalaman Kerja, dan Rekam Jejak Organisasi
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Education & Organizations */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9-5 9 5 9-5-9 5zm0 0v6m0 0v6m0-6H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                  Education
                </h3>
              </div>

              <div className="rounded-2xl bg-zinc-900/20 border border-zinc-800/60 p-6 md:p-8 space-y-6 hover:border-zinc-800 hover:bg-zinc-900/30 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs font-black text-indigo-400 tracking-wider">
                      {education.period}
                    </span>
                    <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/25">
                      IPK {education.gpa}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {education.institution}
                  </h4>
                  <p className="text-sm text-zinc-400">
                    {education.degree}
                  </p>
                </div>

                <div className="border-t border-zinc-900 pt-6">
                  <h5 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                    Mata Kuliah Relevan:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-3 py-1 bg-zinc-950 border border-zinc-800/80 text-zinc-400 rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Organizations Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                  Organization
                </h3>
              </div>

              <div className="space-y-4">
                {organizations.map((org) => (
                  <div
                    key={org.name}
                    className="rounded-xl bg-zinc-900/20 border border-zinc-800/60 p-5 hover:border-zinc-800 hover:bg-zinc-900/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="text-base font-bold text-white">
                        {org.name}
                      </h4>
                    </div>
                    <span className="inline-block text-xs font-semibold text-indigo-400 mb-2">
                      {org.role}
                    </span>
                    {org.desc && (
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {org.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Work Experience */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                Work Experience
              </h3>
            </div>

            {/* Main Work Card */}
            <div className="rounded-2xl bg-zinc-900/20 border border-zinc-800/60 p-6 md:p-8 space-y-6 hover:border-zinc-800 hover:bg-zinc-900/30 transition-all duration-300">
              
              {/* Job Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
                <div>
                  <h4 className="text-xl font-extrabold text-white">
                    {workExperience.title}
                  </h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    {workExperience.company}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="text-xs font-black text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20">
                    {workExperience.period}
                  </span>
                </div>
              </div>

              {/* Specific Roles Breakdown */}
              <div className="space-y-6 pt-2">
                {workExperience.roles.map((role) => (
                  <div key={role.role} className="relative pl-6 border-l-2 border-zinc-800/80 hover:border-indigo-500 transition-colors group">
                    {/* Glowing Bullet Point */}
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-zinc-800 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-all shadow-[0_0_10px_rgba(99,102,241,0)] group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    
                    <h5 className="text-sm font-black text-white uppercase tracking-wider mb-1">
                      {role.role}
                    </h5>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
