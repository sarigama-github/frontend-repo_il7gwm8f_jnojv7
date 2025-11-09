import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative bg-black py-12 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
          <span className="text-white/90 tracking-wider font-semibold">ZENITH</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="text-white/70 hover:text-white transition">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="GitHub" className="text-white/70 hover:text-white transition">
            <Github size={20} />
          </a>
        </div>
        <p className="text-white/50 text-sm">© {year} Zenith. All rights reserved.</p>
      </div>
    </footer>
  );
}
