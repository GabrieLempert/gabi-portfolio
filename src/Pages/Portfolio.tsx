import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const { projects, loading, error } = useProjects();

  return (
    <main className="min-h-screen px-6 py-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>

      {loading && <p className="text-center">Loading projects...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
