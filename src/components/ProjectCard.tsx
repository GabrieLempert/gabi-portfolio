import { FaExternalLinkAlt } from "react-icons/fa";
import type { PortfolioProject } from "../util/fetchProjects";

interface Props {
	project: PortfolioProject;
}

export default function ProjectCard({ project }: Props) {
	return (
		<article className="bg-[#fdfbf7] border border-[#8d6e63]/30 p-8 h-full relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
			{/* Renaissance Hand-drawn Corner Accent */}
			<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#3e2723]" />

			<div>
				<h3 className="text-2xl font-bold text-[#3e2723] mb-3 font-serif italic group-hover:text-[#8d6e63] transition-colors">
					{project.name}
				</h3>
				<p className="text-[#5d4037] text-sm mb-6 leading-relaxed italic line-clamp-4">
					{project.description ||
						"An invention awaiting description in the codex."}
				</p>
			</div>

			<div className="pt-6 border-t border-dotted border-[#8d6e63]/40 flex justify-between items-center">
				{project.language && (
					<span className="text-[10px] uppercase tracking-widest font-bold text-[#8d6e63]">
						{project.language}
					</span>
				)}
				<a
					href={project.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#3e2723] hover:text-[#8d6e63] flex items-center gap-2 text-xs font-bold uppercase tracking-tighter transition-colors">
					Examine Codex <FaExternalLinkAlt className="text-[10px]" />
				</a>
			</div>
		</article>
	);
}
