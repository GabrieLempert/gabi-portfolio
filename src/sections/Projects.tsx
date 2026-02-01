import { useProjects } from "../hooks/useProjects"; //
import ProjectCard from "../components/ProjectCard"; //

export function Projects() {
	const { projects = [], loading } = useProjects(); //

	return (
		<div className="w-full flex flex-col items-center">
			<div className="text-center mb-12">
				<h2 className="text-5xl font-serif italic text-[#3e2723]">
					Digital Inventions
				</h2>
				<div className="w-24 h-0.5 bg-[#8d6e63] mx-auto mt-4 opacity-40"></div>
				<p className="mt-4 text-[#5d4037] italic opacity-75">
					"Simplicity is the ultimate sophistication."
				</p>
			</div>

			<div className="w-full relative group">
				{loading ? (
					<p className="text-center text-[#8d6e63] animate-pulse">
						Sketching blueprints...
					</p>
				) : (
					<div className="flex gap-8 overflow-x-auto pb-12 px-4 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
						{projects?.map((p) => (
							<div
								key={p.id}
								className="min-w-[300px] md:min-w-[400px] lg:min-w-[450px] snap-center transition-transform duration-300 hover:-translate-y-2">
								<ProjectCard project={p} />
							</div>
						))}
					</div>
				)}

				<div className="flex justify-center items-center gap-4 mt-4">
					<span className="text-[#8d6e63] animate-pulse text-xs uppercase tracking-[0.3em] italic">
						← Swipe to explore the Codex →
					</span>
				</div>
			</div>
		</div>
	);
}
