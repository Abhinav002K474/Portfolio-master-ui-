"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="glass border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-white/40 mb-1">Email</span>
                    <a href="mailto:hello@example.com" className="text-lg hover:text-primary transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-white/40 mb-1">Location</span>
                    <span className="text-lg">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass border border-white/10 p-8 rounded-2xl flex-1">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <p className="text-white/60 leading-relaxed text-sm mb-4">
                I am currently open to new freelance opportunities and full-time roles. 
                If you have a project that needs some creative juice, hit me up.
              </p>
              <div className="flex items-center gap-2 text-sm text-green-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></span>
                Available for hire
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form className="glass border border-white/10 p-8 rounded-2xl flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              
              <button 
                type="button" 
                className="group w-full flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-xl px-4 py-4 mt-2 hover:bg-neutral-200 transition-all active:scale-95"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
