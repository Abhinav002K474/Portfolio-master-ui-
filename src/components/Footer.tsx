import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/50 text-center relative z-10">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          <span className="gradient-text">AK</span>.
        </a>
        
        <div className="flex items-center justify-center gap-6">
          <a href="#" className="p-2 text-white/40 hover:text-white transition-colors" aria-label="Github">
            <FaGithub size={20} />
          </a>
          <a href="#" className="p-2 text-white/40 hover:text-white transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="p-2 text-white/40 hover:text-white transition-colors" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
        </div>
        
        <p className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} Generated Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
