"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0,rgba(0,0,0,0)_50%)]" />
      
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-sm text-white/80 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building Digital <br className="hidden md:block" />
          <span className="gradient-text">Experiences</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm an AI Developer & UI Engineer. I build exceptional and accessible 
          digital experiences for the web with modern technologies.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 glass border border-white/10 rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            <Download size={18} />
            Resume
          </a>
        </motion.div>

        <motion.div 
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SocialLink href="#" icon={<FaGithub />} />
          <SocialLink href="#" icon={<FaLinkedin />} />
          <SocialLink href="#" icon={<FaTwitter />} />
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />
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
