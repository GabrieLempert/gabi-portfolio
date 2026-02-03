// src/utils/fetchProjects.ts
const gitHubURL = import .meta.env.VITE_GITHUB_URL;
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
	return data.map((repo) => ({
		id: repo.id, // Assuming id is available in the GitHub data
		name: repo.name,
		html_url: repo.html_url,
		description: repo.description,
		language: repo.language,
		created_at: repo.created_at,
		updated_at: repo.updated_at,
	}));
}

// Fetch and transform GitHub repo data, then save to local JSON
export async function fetchAndSaveProjects() {
	try {
		//fetch data from the local JSON file

		const response = await fetch(`${gitHubURL}`);
		
		if (!response.ok) throw new Error("GitHub API failed");

		const rawData = await response.json();
		
		const transformed = transformProjects(rawData[0].projects);
		// return the saved data
		return transformed;
	} catch (err) {
		console.error("❌ Failed to fetch projects from GitHub:", err);
	}
}
