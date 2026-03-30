"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "AI Image Generator",
    description: "A full-stack application that generates high-quality images from text descriptions using Stable Diffusion models.",
    tech: ["Next.js", "Tailwind CSS", "Python", "FastAPI"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
    links: { github: "#", live: "#" }
  },
  {
    title: "DevSync Analytics",
    description: "A developer dashboard that aggregates coding metrics and productivity statistics across various IDEs.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    links: { github: "#", live: "#" }
  },
  {
    title: "EcoCommerce Platform",
    description: "A sustainable e-commerce platform with built-in carbon footprint tracking for every purchase.",
    tech: ["Vue.js", "Nuxt", "Stripe", "Supabase"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    links: { github: "#", live: "#" }
  },
  {
    title: "Smart Finance App",
    description: "Personal finance tracker that uses machine learning to categorize expenses and predict future spending habits.",
    tech: ["React Native", "Expo", "Firebase", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    links: { github: "#", live: "#" }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />
              </div>

              {/* Content Box */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/50">
                    <a href={project.links.github} className="flex items-center gap-2 hover:text-white transition-colors">
                      <FaGithub size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a href={project.links.live} className="flex items-center gap-2 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/10 rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            View More on GitHub
            <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
