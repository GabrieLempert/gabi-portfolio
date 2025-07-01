import type { PortfolioProject } from "../util/fetchProjects";


export default function ProjectCard({ project }: { project: PortfolioProject }) {
  const formattedDate = new Date(project.updated_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
      <div>
        <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{project.name}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {project.description ?? "No description provided."}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>
            {project.language && (
              <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 text-xs font-medium">
                {project.language}
              </span>
            )}
          </span>
          <span>Updated: {formattedDate}</span>
        </div>
      </div>
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition"
      >
        View on GitHub
      </a>
    </div>
  );
}
