"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TIMELINE = [
  {
    role: "Senior AI Developer",
    company: "TechNova Solutions",
    period: "2023 - Present",
    description: "Leading the development of generative AI pipelines and integrating enterprise LLM solutions into highly scalable web architectures."
  },
  {
    role: "Full Stack Engineer",
    company: "DevSync IO",
    period: "2021 - 2023",
    description: "Built and maintained comprehensive dashboards using React and Node.js. Improved application performance by 40% through code optimization."
  },
  {
    role: "Frontend Developer",
    company: "Creative Web Studio",
    period: "2019 - 2021",
    description: "Developed responsive and interactive UI components for various client projects using React, Vue, and Tailwind CSS."
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (lineRef.current && containerRef.current) {
      gsap.fromTo(lineRef.current, 
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );
    }
  }, []);

  return (
    <section id="experience" className="py-24 relative bg-black/40 backdrop-blur-sm border-y border-white/5">
      <div className="w-full max-w-4xl mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Container for Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 overflow-hidden">
             {/* The glowing progress line */}
             <div ref={lineRef} className="w-full bg-primary/80 shadow-[0_0_10px_rgba(79,70,229,0.8)]" />
          </div>

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-[56px] md:w-auto md:-translate-x-1/2 flex justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-black" />
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12"}`}>
                  <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                  <div className="text-primary font-medium mb-3">{item.company} <span className="text-white/40">| {item.period}</span></div>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
