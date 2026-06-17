'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // 1. INI ADALAH VARIABEL YANG BIKIN ERROR JIKA TIDAK ADA
  // Variabel ini mengatur cara kerja animasinya
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  // 2. KODE TAMPILAN DIMULAI DARI SINI
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden selection:bg-indigo-500/30"
    >
      {/* Background & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.18, 0.1],
          x: ["-50%", "-45%", "-55%", "-50%"],
          y: ["-50%", "-55%", "-45%", "-50%"]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.05, 0.12, 0.05],
          x: ["-50%", "-55%", "-45%", "-50%"],
          y: ["-50%", "-45%", "-55%", "-50%"]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute top-1/2 left-1/2 w-[300px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Kontainer Utama */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl flex flex-col items-center"
      >
        
        {/* PENS Badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-zinc-300 text-xs sm:text-sm font-medium tracking-widest uppercase">
            Politeknik Elektronika Negeri Surabaya
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="mb-6 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30">
            Dino Ariel
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl text-zinc-400 font-light tracking-[0.2em] uppercase max-w-3xl mx-auto leading-relaxed mb-12">
          Product Owner <span className="text-indigo-400 font-normal">&</span> Software Engineer
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold tracking-wide text-center transition-shadow duration-300"
          >
            Explore Work
          </motion.a>
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full text-sm font-semibold tracking-wide text-center transition-colors duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}