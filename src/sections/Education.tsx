// src/sections/Education.tsx
export function Education() {
	return (
		<section className="max-w-4xl mx-auto px-6 py-12 border-y border-[#8d6e63]/20">
			<h2 className="text-3xl font-bold italic mb-8 font-serif text-[#3e2723]">
				Academic Foundations
			</h2>
			<div className="space-y-10">
				{/* M.Sc. */}
				<div className="relative pl-8 border-l border-dotted border-[#8d6e63]">
					<div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-[#3e2723]" />
					[cite_start]
					<h3 className="text-xl font-bold uppercase tracking-widest">
						M.Sc. in Computer Science [cite: 29, 30]
					</h3>
					[cite_start]
					<p className="text-[#8d6e63] font-medium">
						Open University of Israel [cite: 31]
					</p>
					[cite_start]
					<p className="italic text-sm">
						In Progress — Expected 2026 [cite: 31]
					</p>
				</div>

				{/* B.Sc. */}
				<div className="relative pl-8 border-l border-dotted border-[#8d6e63]">
					<div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-[#8d6e63]" />
					[cite_start]
					<h3 className="text-xl font-bold uppercase tracking-widest">
						B.Sc. in Computer Science
					</h3>
					[cite_start]
					<p className="text-[#8d6e63] font-medium">
						Afeka College of Engineering, Tel Aviv
					</p>
					<p className="italic text-sm">
						Sep 2020 – Oct 2023 | GPA: 81
					</p>
					[cite_start]
					<p className="mt-2 text-sm opacity-80 italic">
						Completed multiple academic projects in mobile, backend,
						and full stack development.
					</p>
				</div>
			</div>
		</section>
	);
}
