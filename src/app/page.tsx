import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Scene } from "@/components/3D/Scene";
import { Cursor } from "@/components/Cursor";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cursor />
      <Scene />
      
      {/* We add pointer-events-none to the main wrapper to allow the 3D canvas beneath to get mouse movements globally */}
      <main className="flex-grow z-10 w-full">
        <Navbar />
        
        <div className="relative pointer-events-none">
           {/* Section 1: Hero */}
           <Hero />

           {/* Section 2: About - Added spacing so 3D character shifts via Scroll Y */}
           <div className="mt-[20vh] pointer-events-auto">
             <About />
           </div>

           {/* Section 3: Skills / Projects */}
           <div className="mt-[20vh] pointer-events-auto">
             <Skills />
             <Projects />
           </div>

           {/* Section 4: Experience */}
           <div className="mt-[20vh] pointer-events-auto relative z-20">
             <Experience />
           </div>

           {/* Section 5: Contact */}
           <div className="mt-[10vh] pointer-events-auto relative z-20 bg-black/60 backdrop-blur-md">
             <Contact />
             <Footer />
           </div>
        </div>
      </main>
    </div>
  );
}
