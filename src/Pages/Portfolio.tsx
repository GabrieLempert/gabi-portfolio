import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const { projects = [], loading, error } = useProjects();

  return (
    
    <main className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      {loading && <p className="text-center text-gray-600 dark:text-gray-400">Loading projects...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      <section
        className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 overflow-y-auto"
        style={{ maxHeight: "70vh" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
       
      </section>
    
    </main>
  );
}
