import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Agents from './components/Agents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Background base gradients for depth */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_-10%_-10%,rgba(56,189,248,0.06),transparent),radial-gradient(1000px_600px_at_110%_110%,rgba(217,70,239,0.06),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Agents />
        {/* Gallery placeholder area visually styled but simple to keep focus */}
        <section id="gallery" className="relative py-24 bg-gradient-to-b from-[#070815] to-black">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_20%,rgba(56,189,248,0.12),transparent)]" />
          <div className="relative container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Gallery</h2>
            <p className="text-center text-white/70 max-w-2xl mx-auto">
              A glimpse into our world — product renders, concept art, and moments of pure velocity.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
                  <img
                    src={`https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop`}
                    alt="Zenith gallery"
                    className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
