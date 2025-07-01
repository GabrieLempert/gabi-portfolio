// hooks/useProjects.ts
import { useEffect, useState } from "react";
import { fetchAndSaveProjects, type PortfolioProject } from "../util/fetchProjects";



type ProjectData = {
	meta: {
		createdAt: string;
		updatedAt: string;
	};
	projects: PortfolioProject[];
};

export function useProjects() {
	const [projects, setProjects] = useState<PortfolioProject[]|null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const LOCAL_STORAGE_KEY = "portfolioProjects";



	useEffect(() => {
		const loadProjects = async () => {
			try {
                
				const response = await fetchAndSaveProjects();
				if (!response || response.length === 0) {
                    throw new Error("No projects found");
                }
				const freshData:ProjectData = {
                        meta: {
                                createdAt: new Date().toISOString(),
                                updatedAt: new Date().toISOString(),
                        },
                        projects: response,
                };

				const cachedRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
				const cached = cachedRaw
					? (JSON.parse(cachedRaw) as ProjectData)
					: null;

				if (
					!cached ||
					new Date(freshData.meta.updatedAt) >
						new Date(cached.meta.updatedAt)
				) {
					localStorage.setItem(
						LOCAL_STORAGE_KEY,
						JSON.stringify(freshData),
					);
					setProjects(freshData.projects);
				} else {
					setProjects(cached.projects);
				}
				setError(null);
			} catch (error) {
				console.error("Error fetching projects:", error);
			} finally {
				setLoading(false);
			}
		};

		loadProjects();
	}, []);

	return { projects, loading, error };
}
