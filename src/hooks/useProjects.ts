// hooks/useProjects.ts
import { useEffect, useState } from "react";
import { fetchAndSaveProjects, type PortfolioProject } from "../util/fetchProjects";

export function useProjects() {
    const [projects, setProjects] = useState<PortfolioProject[] | null>(null);
    const [loading, setLoading] = useState(true);
    const LOCAL_JSON_KEY = "github_projects_cache";

    useEffect(() => {
        const syncWithGithub = async () => {
            try {
                // 1. קריאת API ל-GitHub (הנתונים הכי טריים)
                const freshProjects = await fetchAndSaveProjects();
                
                // 2. שליפת ה-JSON הקיים מה-Storage (המצב האחרון ששמרנו)
                const cachedJson = localStorage.getItem(LOCAL_JSON_KEY);
                const freshProjectsString = JSON.stringify(freshProjects);

                // 3. השוואה: האם הנתונים מ-GitHub שונים ממה ששמור אצלנו?
                if (freshProjectsString !== cachedJson) {
                    console.log("🔄 Change detected on GitHub! Updating local JSON and state.");
                    
                    // שמירת ה-JSON החדש (במקום הקובץ הפיזי)
                    localStorage.setItem(LOCAL_JSON_KEY, freshProjectsString);
                    
                    // עדכון התצוגה במטריצה
                    setProjects(freshProjects);
                } else {
                    console.log("✅ GitHub data matches our local JSON. No update needed.");
                    if (cachedJson) {
                        setProjects(JSON.parse(cachedJson));
                    }
                }
            } catch (err) {
                console.error("Sync failed:", err);
            } finally {
                setLoading(false);
            }
        };

        syncWithGithub();
    }, []);

    return { projects, loading };
}