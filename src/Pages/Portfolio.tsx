import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";
import { Hero } from "../sections/Hero";
import { Education } from "../sections/Education";
import { Experience } from "../sections/Experience";
import { Skills } from "../sections/Skills";
import { Contact } from "../sections/Contact";

type Tab =
	| "Home"
	| "Academic"
	| "Masteries"
	| "Chronology"
	| "Inventions"
	| "Contact";

export default function Portfolio() {
	const [activeTab, setActiveTab] = useState<Tab>("Home");
	const { projects = [] } = useProjects();

	const renderSection = () => {
		switch (activeTab) {
			case "Home":
				return <Hero />;
			case "Academic":
				return <Education />;
			case "Masteries":
				return <Skills />;
			case "Chronology":
				return <Experience />;
			case "Inventions":
				return (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects?.map((p) => (
							<ProjectCard
								key={p.id}
								project={p}
							/>
						))}
					</div>
				);
			case "Contact":
				return <Contact />;
		}
	};

	return (
		<main className="h-screen flex text-[#2c1e1a] font-serif">
			{/* Vertical Navigation Bar */}
			<nav className="w-20 md:w-64 border-r-2 border-[#3e2723] bg-[#f4f1ea] flex flex-col items-center py-8 z-50">
				<div className="text-3xl font-bold border-2 border-[#3e2723] px-3 py-1 mb-12">
					GL
				</div>

				<div className="flex flex-col gap-8 w-full px-4">
					{(
						[
							"Home",
							"Academic",
							"Masteries",
							"Chronology",
							"Inventions",
							"Contact",
						] as Tab[]
					).map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`text-xs md:text-sm uppercase font-bold tracking-widest text-left transition-all hover:text-[#8d6e63] ${
								activeTab === tab
									? "text-[#8d6e63] translate-x-2"
									: "opacity-60"
							}`}>
							{activeTab === tab && (
								<span className="mr-2">❧</span>
							)}
							{tab}
						</button>
					))}
				</div>
			</nav>

			{/* Main Display Stage */}
			<section className="flex-grow relative bg-white/20 overflow-y-auto">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="p-8 md:p-16 max-w-6xl mx-auto">
						{renderSection()}
					</motion.div>
				</AnimatePresence>

				{/* Parchment Overlay Decor */}
				<div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]" />
			</section>
		</main>
	);
}
