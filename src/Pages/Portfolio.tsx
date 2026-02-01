import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const { projects = [], loading, error } = useProjects();

  return (
    <main className="min-h-screen flex flex-col bg-[#f0e6d2] text-[#3e2723] font-serif selection:bg-[#8d6e63] selection:text-white">
      {/* Da Vinci Style Navigation */}
      <nav className="sticky top-0 z-50 w-full px-8 py-4 bg-[#f0e6d2]/95 border-b-2 border-[#5d4037] backdrop-blur-sm flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold tracking-widest uppercase border-2 border-[#3e2723] px-2 py-1 cursor-pointer hover:bg-[#3e2723] hover:text-[#f0e6d2] transition-colors">
          GL
        </div>
        <div className="flex gap-8 text-sm font-bold tracking-widest uppercase">
          <a href="/" className="hover:text-[#8d6e63] transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8d6e63] transition-all group-hover:w-full"></span>
          </a>
          <a href="#projects" className="hover:text-[#8d6e63] transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8d6e63] transition-all group-hover:w-full"></span>
          </a>
        </div>
      </nav>

      <div className="flex-grow flex flex-col items-center px-6 py-12 w-full max-w-7xl mx-auto">
        <header className="mb-16 text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#3e2723]">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-[#5d4037] mx-auto mb-4"></div>
          <p className="text-lg text-[#5d4037] italic max-w-2xl mx-auto">
            "Simplicity is the ultimate sophistication."
          </p>
        </header>

        {loading && <p className="text-center text-[#5d4037] animate-pulse text-xl">Sketching blueprints...</p>}
        {error && <p className="text-center text-red-800 border-2 border-red-800 p-4 bg-red-50">{error.message}</p>}

        <section id="projects" className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects?.map((project) => (
            <div key={project.id} className="transform hover:-translate-y-2 transition-transform duration-300">
              <ProjectCard project={project} />
            </div>
          ))}
          </div>
        </section>
      </div>
    </main>
  );
}
