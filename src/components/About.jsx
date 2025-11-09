import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#070815]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_20%_20%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_300px_at_80%_80%,rgba(217,70,239,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(88,101,242,0.15)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Zenith</h2>
          <p className="text-white/80 leading-relaxed">
            Zenith is a premium gaming and technology brand engineered for those who demand the edge. Our ecosystem blends cutting‑edge hardware with intuitive software, delivering control, speed, and precision in every moment.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-cyan-300 font-medium">Neon Aesthetics</p>
              <p className="text-white/70 mt-1">Blue & purple accents with cinematic lighting.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-fuchsia-300 font-medium">Glasmorphism</p>
              <p className="text-white/70 mt-1">Soft blurs, frosted cards, and depth.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-cyan-300 font-medium">Responsive</p>
              <p className="text-white/70 mt-1">Optimized for all screens and devices.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-fuchsia-300 font-medium">Immersive</p>
              <p className="text-white/70 mt-1">Cinematic motion and layered visuals.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
              alt="Futuristic tech"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan-500/40 to-fuchsia-500/40 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
