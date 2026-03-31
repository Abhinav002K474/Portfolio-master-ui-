"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Hero() {
  const [showSecretPanel, setShowSecretPanel] = useState(false);

  useEffect(() => {
    const handleEvent = (e: any) => {
      setShowSecretPanel(e.detail);
    };
    document.addEventListener("character-look-right", handleEvent);
    return () => document.removeEventListener("character-look-right", handleEvent);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden pointer-events-none *:pointer-events-auto">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />
      
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center justify-end md:justify-center text-center pb-24 md:pb-0 h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-sm text-white/80 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 mix-blend-difference"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Creative <span className="gradient-text">Developer</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build interactive, immersive, and high-performance digital experiences.
        </motion.p>
        
        <motion.div 
          className="hidden md:flex flex-col items-center mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
           <div className="text-white/40 text-xs tracking-widest uppercase mb-2">Move cursor right for a secret</div>
           <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </motion.div>
      </div>

      {/* Secret About Panel (Triggered by 3D character looking right) */}
      <AnimatePresence>
        {showSecretPanel && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute top-1/2 right-10 -translate-y-1/2 w-80 glass p-6 rounded-2xl border border-white/20 z-50 pointer-events-auto shadow-2xl shadow-primary/20 hidden md:block"
          >
            <h3 className="text-2xl font-bold mb-3 gradient-text">Oh, Hi There! 👋</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              You found the interactive trigger! I am an AI Integration Specialist and 3D Web UI Developer. 
              Scroll down to explore my timeline and projects.
            </p>
            <div className="flex gap-4">
              <a href="#about" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors">
                Read More
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="p-3 glass rounded-full text-white/70 hover:text-white hover:scale-110 transition-all border border-white/10"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
