import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline scene as background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_50%_0%,rgba(88,101,242,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_30px_rgba(56,189,248,0.6)]" />
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider text-white">
            ZENITH
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-base md:text-xl text-white/80"
        >
          Where Power Meets Precision
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#agents"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.4)] hover:brightness-110 transition"
          >
            Explore Agents
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-xl border border-white/20 text-white/90 backdrop-blur-md hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
