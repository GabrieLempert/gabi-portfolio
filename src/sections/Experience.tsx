export function Experience() {
	const experiences = [
		{
			role: "Support Engineer Tier 2",
			company: "Advantive (Pepperi)",
			period: "Nov 2022 - Present",
			points: [
				"Resolved Level 1 to Level 3 post-sales technical issues with strong client focus.",
				"Created internal scripts to automate workflows and used REST APIs for custom tools.",
				"Utilized daily SQL queries for backend data investigation and assisted developers with integrations.",
			],
		},
		{
			role: "Manual QA",
			company: "Bright Data",
			period: "Aug 2021 - Aug 2022",
			points: [
				"Monitored production servers and ensured system stability.",
				"Verified Linux product releases and performed manual testing to report bugs.",
			],
		},
	];

	return (
		<section className="max-w-5xl mx-auto py-20 px-6 font-serif">
			<h2 className="text-4xl italic text-center mb-12 text-[#3e2723]">
				Professional Chronology
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{experiences.map((exp, idx) => (
					<div
						key={idx}
						className="p-8 bg-white/40 backdrop-blur-sm border border-[#8d6e63]/20 relative hover:shadow-lg transition-all duration-300">
						{/* Renaissance Corner Accent */}
						<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#3e2723]" />

						<span className="text-xs font-bold uppercase tracking-widest text-[#8d6e63]">
							{exp.period}
						</span>
						<h3 className="text-2xl font-bold mt-2 text-[#3e2723]">
							{exp.role}
						</h3>
						<p className="italic text-[#5d4037] mb-6">
							{exp.company}
						</p>
						<ul className="space-y-3 text-sm italic leading-relaxed list-none border-t border-dotted border-[#8d6e63]/30 pt-4">
							{exp.points.map((point, i) => (
								<li key={i}>— {point}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
