// src/sections/Contact.tsx
export function Contact() {
	return (
		<div className="text-center space-y-10 max-w-3xl mx-auto font-serif">
			<div className="space-y-4">
				<h2 className="text-5xl italic text-[#3e2723]">
					The Correspondence
				</h2>
				<div className="w-24 h-0.5 bg-[#8d6e63] mx-auto opacity-30" />
			</div>

			<p className="text-xl leading-relaxed text-[#5d4037] italic">
				"I am a quick learner with strong problem-solving skills, always
				seeking to join a fast-paced development team where I can grow
				and contribute my Masteries. Whether you have a question or a
				grand vision to build, let us connect and create something
				timeless."
			</p>

			<div className="flex flex-col items-center gap-6 pt-6">
				<a
					href="mailto:gabrielempert@gmail.com"
					className="group relative px-12 py-5 border-2 border-[#3e2723] text-[#3e2723] font-bold uppercase tracking-[0.3em] transition-all hover:bg-[#3e2723] hover:text-[#f4f1ea]">
					<span className="relative z-10">Send an Epistle</span>
					<div className="absolute -bottom-2 -right-2 w-full h-full border border-[#8d6e63] -z-10 group-hover:bottom-0 group-hover:right-0 transition-all" />
				</a>
			</div>
		</div>
	);
}
