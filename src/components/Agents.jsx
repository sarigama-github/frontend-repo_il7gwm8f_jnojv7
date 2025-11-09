import React from 'react';
import { motion } from 'framer-motion';

const agents = [
  {
    name: 'Vesper',
    role: 'Infiltrator',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Astra',
    role: 'Controller',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Nyx',
    role: 'Recon',
    img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Ion',
    role: 'Duelist',
    img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Agents() {
  return (
    <section id="agents" className="relative py-24 bg-gradient-to-b from-black to-[#070815]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_10%_30%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_400px_at_90%_70%,rgba(217,70,239,0.12),transparent)]" />

      <div className="relative container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Featured Agents
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((a, idx) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">{a.name}</h3>
                <p className="text-cyan-300 text-sm">{a.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
