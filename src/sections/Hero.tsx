// src/sections/Hero.tsx
export function Hero() {
	return (
		<div className="text-center space-y-6">
			<h1 className="text-5xl md:text-7xl font-bold text-[#3e2723] tracking-tighter">
				Gabriel Lempert
			</h1>
			<p className="text-xl md:text-2xl italic text-[#8d6e63] font-serif uppercase tracking-[0.3em]">
				Junior Full-Stack Developer
			</p>
			<div className="w-24 h-px bg-[#3e2723] mx-auto opacity-40" />
			<p className="max-w-2xl mx-auto text-lg leading-relaxed italic opacity-80">
				"Junior software developer with a strong CS background and
				hands-on experience in support and QA roles."
			</p>
		</div>
	);
}
