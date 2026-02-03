import { useEffect, useState } from "react";
import {
	fetchAndSaveProjects,
	type PortfolioProject,
} from "../util/fetchProjects";

type ProjectData = {
	meta: {
		createdAt: string;
		updatedAt: string;
	};
	projects: PortfolioProject[];
};

export function useProjects() {
	const [projects, setProjects] = useState<PortfolioProject[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const LOCAL_STORAGE_KEY = "portfolioProjects";

	useEffect(() => {
		const loadProjects = async () => {
			try {
				// 1. שליפת נתונים מה-Cache (Local Storage) במידה וקיימים
				const cachedRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
				const cached = cachedRaw
					? (JSON.parse(cachedRaw) as ProjectData)
					: null;

				// עדכון ראשוני מהיר מה-Cache כדי שהמשתמש לא יחכה ל-API
				if (cached) {
					setProjects(cached.projects);
				}

				// 2. פנייה ל-GitHub לקבלת הנתונים הכי עדכניים
				const freshProjects = await fetchAndSaveProjects();

				if (!freshProjects || freshProjects.length === 0) {
					throw new Error("No projects found");
				}

				// 3. בדיקה האם יש הבדל בין הנתונים החדשים לנתונים השמורים
				// אנו משווים את תוכן המערכים כשלעצמם
				const freshDataString = JSON.stringify(freshProjects);
				const cachedDataString = cached
					? JSON.stringify(cached.projects)
					: null;

				if (freshDataString !== cachedDataString) {
					console.log("Difference detected! Updating projects...");

					const newData: ProjectData = {
						meta: {
							createdAt:
								cached?.meta.createdAt ||
								new Date().toISOString(),
							updatedAt: new Date().toISOString(),
						},
						projects: freshProjects,
					};

					// עדכון ה-Local Storage וה-State רק אם יש שינוי
					localStorage.setItem(
						LOCAL_STORAGE_KEY,
						JSON.stringify(newData),
					);
					setProjects(freshProjects);
				} else {
					console.log("No changes detected in GitHub repos.");
				}

				setError(null);
			} catch (err) {
				console.error("Error fetching projects:", err);
				setError(
					err instanceof Error ? err : new Error("Unknown error"),
				);
			} finally {
				setLoading(false);
			}
		};

		loadProjects();
	}, []);

	return { projects, loading, error };
}
