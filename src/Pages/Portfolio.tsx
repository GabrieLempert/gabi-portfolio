import { useState, useEffect, useRef, useMemo } from "react";
import { Hero } from "../sections/Hero";
import { Education } from "../sections/Education";
import { Experience } from "../sections/Experience";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects"; // Modular projects section
import { Contact } from "../sections/Contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize sections to fix dependency warnings and prevent re-renders
  const sections = useMemo(() => [
    { id: "home", label: "Home", component: <Hero /> },
    { id: "education", label: "Education", component: <Education /> },
    { id: "skills", label: "Skills", component: <Skills /> },
    { id: "experience", label: "Experience", component: <Experience /> },
    { id: "projects", label: "Projects", component: <Projects /> },
    { id: "contact", label: "Contact", component: <Contact /> }
  ], []);

  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]); // sections is now a stable dependency

  return (
    <main className="flex h-screen w-screen bg-[#f4f1ea] font-serif overflow-hidden">
      {/* Sidebar Navigation */}
      <nav className="w-20 md:w-64 border-r border-[#3e2723]/20 flex flex-col items-center py-10 z-50 bg-[#f4f1ea]">
        <div className="text-3xl font-bold border-2 border-[#3e2723] px-3 py-1 mb-20 shadow-[3px_3px_0px_#8d6e63]">GL</div>
        <div className="flex flex-col gap-10 w-full px-8">
          {sections.map((s) => (
            <a 
              key={s.id} 
              href={`#${s.id}`} 
              className={`flex items-center gap-3 text-xs md:text-sm uppercase font-bold tracking-widest transition-all duration-500 ${
                activeSection === s.id ? "text-[#8d6e63] translate-x-4" : "opacity-40 hover:opacity-100"
              }`}
            >
              <span className={`transition-opacity ${activeSection === s.id ? "opacity-100" : "opacity-0"}`}>❧</span>
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Snap Scroll Container */}
      <div ref={containerRef} className="flex-grow overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar">
        {sections.map((s) => (
          <section 
            key={s.id} 
            id={s.id} 
            className="min-h-screen w-full snap-start flex flex-col items-center justify-center p-12 md:p-24 relative border-b border-[#8d6e63]/10"
          >
            <div className="relative w-full max-w-6xl border border-[#8d6e63]/20 bg-[#fdfbf7]/40 p-6 md:p-12 shadow-sm">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#3e2723]/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#3e2723]/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#3e2723]/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#3e2723]/40" />
              
              <div className="flex flex-col items-center w-full">
                {s.component}
              </div>
            </div>
            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]" />
          </section>
        ))}
      </div>
    </main>
  );
}