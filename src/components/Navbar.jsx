import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Agents', href: '#agents' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] md:w-[80%]"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(88,101,242,0.25)]">
        <ul className="flex items-center justify-center gap-6 md:gap-10 px-4 py-3 text-sm md:text-base font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white/80 hover:text-white transition-colors tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
