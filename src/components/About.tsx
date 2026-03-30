"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Image Placeholder (Glass Card) */}
            <div className="aspect-square rounded-3xl glass border border-white/10 p-2 overflow-hidden relative">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="relative z-10 text-center">
                  <span className="text-6xl text-white/20 font-bold tracking-tighter">Code</span>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass !bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
              <p className="text-4xl font-bold gradient-text">3+</p>
              <p className="text-sm text-white/60">Years of<br />Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-medium">
              Transforming ideas into <span className="gradient-text text-transparent">powerful digital products</span>
            </h3>
            
            <p className="text-white/60 leading-relaxed text-lg">
              I am a passionate software engineer with a strong focus on building scalable web applications and intuitive user interfaces. My journey in tech started with a curiosity for creating things from scratch and has evolved into a career of solving complex problems through elegant code.
            </p>
            
            <p className="text-white/60 leading-relaxed text-lg">
              Currently, I specialize in combining modern frontend frameworks like React and Next.js with cutting-edge AI technologies to build the next generation of web applications. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Education</span>
                <span className="text-white/60">B.S. Computer Science</span>
                <span className="text-sm text-primary">2018 - 2022</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Location</span>
                <span className="text-white/60">San Francisco, CA</span>
                <span className="text-sm text-primary">Open to Remote</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
