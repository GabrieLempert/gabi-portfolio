import { useState, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";

export function Projects() {
	const { projects = [], loading } = useProjects();
	const [currentPage, setCurrentPage] = useState(0);

	// חלוקת הפרויקטים לקבוצות של 6 עבור המטריצה (3 עמודות x 2 שורות)
	const projectPages = useMemo(() => {
        if (!projects || projects.length === 0) return [];
		const chunks = [];
		for (let i = 0; i < projects?.length; i += 6) {
			chunks.push(projects?.slice(i, i + 6));
		}
		return chunks;
	}, [projects]);

	const nextPage = () => {
		setCurrentPage((prev) => (prev + 1) % projectPages.length);
	};

	const prevPage = () => {
		setCurrentPage(
			(prev) => (prev - 1 + projectPages.length) % projectPages.length,
		);
	};

// ... (שאר ה-imports והלוגיקה נשארים זהים)

    return (
        <div className="w-full flex flex-col items-center py-8">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-serif italic text-[#3e2723]">
                    Digital Inventions
                </h2>
                <div className="w-16 h-0.5 bg-[#8d6e63] mx-auto mt-2 opacity-40"></div>
            </div>

            <div className="w-full relative group px-4 md:px-12 max-w-6xl">
                {loading ? (
                    <p className="text-center text-[#8d6e63] animate-pulse">
                        Sketching blueprints...
                    </p>
                ) : (
                    <>
                        {projectPages.length > 1 && (
                            <button
                                onClick={prevPage}
                                className="absolute left-[-10px] md:left-0 top-1/2 -translate-y-1/2 z-20 p-2 text-[#3e2723] hover:text-[#8d6e63] transition-transform hover:scale-110"
                            >
                                <FaChevronLeft size={32} />
                            </button>
                        )}

                        {/* צמצום גובה המטריצה והרווחים */}
                        <div className="w-full min-h-[450px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                                {projectPages[currentPage]?.map((p) => (
                                    <div
                                        key={p.id}
                                        className="w-full max-w-[340px] flex justify-center">
                                        <ProjectCard project={p} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {projectPages.length > 1 && (
                            <button
                                onClick={nextPage}
                                className="absolute right-[-10px] md:right-0 top-1/2 -translate-y-1/2 z-20 p-2 text-[#3e2723] hover:text-[#8d6e63] transition-transform hover:scale-110"
                            >
                                <FaChevronRight size={32} />
                            </button>
                        )}
                    </>
                )}

                {/* פוטר קטן יותר */}
                <div className="flex flex-col items-center gap-4 mt-8">
                    <div className="flex gap-2">
                        {projectPages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentPage(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    currentPage === idx ? "w-6 bg-[#3e2723]" : "w-1.5 bg-[#8d6e63] opacity-30"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
