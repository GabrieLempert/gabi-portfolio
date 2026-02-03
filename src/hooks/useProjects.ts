// hooks/useProjects.ts
import { useEffect, useState } from "react";
import {
	fetchAndSaveProjects,
	type PortfolioProject,
} from "../util/fetchProjects";

export function useProjects() {
	const [projects, setProjects] = useState<PortfolioProject[] | null>(null);
	const [loading, setLoading] = useState(true);
	const SYNC_INTERVAL = 30 * 60 * 1000; // 30 דקות במילישניות
	useEffect(() => {
		const syncWithGithub = async () => {
			try {
				const lastSync = localStorage.getItem("last_github_sync");
				const now = Date.now();

				// אם עבר פחות מחצי שעה, נשתמש ב-Cache ולא נפנה ל-API
				if (lastSync && now - parseInt(lastSync) < SYNC_INTERVAL) {
					const cached = localStorage.getItem(
						"github_projects_cache",
					);
					if (cached) {
						setProjects(JSON.parse(cached));
						setLoading(false);
						return;
					}
				}

				const freshProjects = await fetchAndSaveProjects();
				const freshString = JSON.stringify(freshProjects);
				localStorage.setItem("github_projects_cache", freshString);
				localStorage.setItem("last_github_sync", now.toString()); // עדכון זמן הסנכרון
				setProjects(freshProjects);
			} catch (err) {
				console.error("Sync failed:", err);
			} finally {
				setLoading(false);
			}
		};
		syncWithGithub();
	}, [SYNC_INTERVAL]);

	return { projects, loading };
}
