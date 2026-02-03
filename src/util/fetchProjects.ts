// src/utils/fetchProjects.ts
const gitHubURL = 'https://api.github.com/users/GabrieLempert/repos';
// "/" in dev, "/MyPortfolio/" in prod

// TypeScript type for a simplified project structure used in the portfolio
export type PortfolioProject = {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	language: [string];
	created_at: string;
	updated_at: string;
};

// Converts full GitHub repo data to the fields needed for portfolio display
type GitHubRepo = {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	language: [string];
	created_at: string;
	updated_at: string;
	// Add other fields if needed
};

export function transformProjects(data: GitHubRepo[]): PortfolioProject[] {
	if (!data || !Array.isArray(data)) return [];

	return data.map((repo) => ({
		id: repo.id,
		name: repo.name,
		html_url: repo.html_url,
		description: repo.description || "Invention in progress...",
		language: repo.language,
		created_at: repo.created_at,
		updated_at: repo.updated_at,
	}));
}

export async function fetchAndSaveProjects(): Promise<PortfolioProject[]> {
	try {
		// קריאת API ישירות ל-GitHub
		const response = await fetch(gitHubURL, {
			headers: {
				// אופציונלי: הוסיפי Token אם את חורגת מהמכסה של GitHub
				Accept: "application/vnd.github.v3+json",
			},
		});

		if (!response.ok)
			throw new Error(`GitHub API error: ${response.status}`);

		const rawData = await response.json();

		// GitHub מחזיר מערך של repos, אז נעביר אותו ישירות לטרנספורמציה
		return transformProjects(rawData);
	} catch (err) {
		console.error("❌ Failed to fetch from GitHub API:", err);
		return [];
	}
}
