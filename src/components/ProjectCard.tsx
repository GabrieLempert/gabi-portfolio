import { FaExternalLinkAlt } from "react-icons/fa";
import type { PortfolioProject } from "../util/fetchProjects";



interface Props {
  project: PortfolioProject;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow transform hover:scale-[1.03] duration-300 flex flex-col justify-between"
      tabIndex={0} // for accessibility: allow keyboard focus
    >
      <div>
        <h3 className="text-xl font-semibold text-emerald-400 mb-2">{project.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description || "No description available."}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        {project.language && (
          <span className="inline-block bg-emerald-700 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full select-none">
            {project.language}
          </span>
        )}

        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-600 transition-colors flex items-center gap-1 text-sm font-semibold"
          aria-label={`Visit ${project.name} repository`}
        >
          View Repo <FaExternalLinkAlt />
        </a>
      </div>
    </article>
  );
}
