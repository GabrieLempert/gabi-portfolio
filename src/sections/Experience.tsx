// src/sections/Experience.tsx (and similar for Education)
export function Experience() {
	const experiences = [
		{
			role: "Support Engineer Tier 2",
			company: "Advantive (Pepperi)",
			period: "Nov 2022 - Present",
			points: [
				"Resolved L1-L3 issues [cite: 14, 18]",
				"Created scripts for automation [cite: 19]",
			],
		},
		{
			role: "Manual QA",
			company: "Bright Data",
			period: "Aug 2021 - Aug 2022",
			points: [
				"Monitored production servers [cite: 23, 26]",
				"Managed Linux releases [cite: 27]",
			],
		},
	];

	return (
		<div className="w-full space-y-12">
			<h2 className="text-5xl italic text-center font-serif text-[#3e2723]">
				Professional Chronology
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{experiences.map((exp, i) => (
					<div
						key={i}
						className="bg-[#fdfbf7] border border-[#8d6e63]/30 p-8 relative shadow-sm hover:shadow-md transition-all">
						<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#3e2723]" />
						<span className="text-xs font-bold uppercase tracking-widest text-[#8d6e63]">
							{exp.period}
						</span>
						<h3 className="text-2xl font-bold mt-2 text-[#3e2723]">
							{exp.role}
						</h3>
						<p className="italic text-[#5d4037] mb-4">
							{exp.company}
						</p>
						<ul className="space-y-2 text-sm italic opacity-90 border-t border-dotted border-[#8d6e63]/30 pt-4">
							{exp.points.map((p, j) => (
								<li key={j}>— {p}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
