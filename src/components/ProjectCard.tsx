import { FaExternalLinkAlt } from "react-icons/fa";
import type { PortfolioProject } from "../util/fetchProjects";

interface Props {
	project: PortfolioProject;
}
export default function ProjectCard({ project }: Props) {
	return (
		<article className="bg-[#fdfbf7] border border-[#8d6e63]/30 p-6 h-full min-h-[300px] w-full max-w-[340px] relative flex flex-col justify-between shadow-sm hover:shadow-md transition-all group m-1">
			{/* Renaissance Hand-drawn Corner Accent */}
			<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#3e2723]" />

			<div className="flex flex-col flex-grow">
				<h3 className="text-xl font-bold text-[#3e2723] mb-2 font-serif italic group-hover:text-[#8d6e63] transition-colors line-clamp-1">
					{project.name}
				</h3>
				{/* צמצום גובה אזור הטקסט */}
				<div className="min-h-[80px]">
					<p className="text-[#5d4037] text-xs mb-4 leading-relaxed italic line-clamp-3">
						{project.description ||
							"An invention awaiting description in the codex."}
					</p>
				</div>
			</div>

			<div className="pt-4 border-t border-dotted border-[#8d6e63]/40 flex justify-between items-center mt-auto">
				{project.language && (
					<span className="text-[9px] uppercase tracking-widest font-bold text-[#8d6e63]">
						{project.language}
					</span>
				)}
				<a
					href={project.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#3e2723] hover:text-[#8d6e63] flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter transition-colors">
					Examine Codex <FaExternalLinkAlt className="text-[8px]" />
				</a>
			</div>
		</article>
	);
}
