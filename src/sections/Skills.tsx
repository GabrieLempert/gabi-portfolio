import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiPython,
  // SiJava, // Removed: not exported by react-icons/si
  SiAndroid,
  SiApple,
  SiMysql,
  SiFirebase,
  SiAmazon,
  SiEagle,
  SiC,
  SiCplusplus,
  SiDocker,
  SiSqlite,
} from "react-icons/si";

type Skill = {
  name: string;
  level: "Intermediate" | "Advanced";
  icon: React.ReactNode;
};

type SkillGroup = {
  category: string;
  skills: Skill[];
};

export function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: "Advanced", icon: <SiReact /> },
        { name: "TypeScript", level: "Advanced", icon: <SiTypescript /> },
        { name: "JavaScript", level: "Advanced", icon: <SiJavascript /> },
        { name: "HTML & CSS", level: "Advanced", icon: <SiJavascript /> }, // fallback icon
        { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
        { name: "Python", level: "Intermediate", icon: <SiPython /> },
        // { name: "Java", level: "Intermediate", icon: <SiJava /> }, // Removed: icon not available
        { name: "Java", level: "Intermediate", icon: <SiC /> }, // Using SiC as a placeholder
        { name: "C", level: "Intermediate", icon: <SiC /> },
        { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
      ],
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Android", level: "Intermediate", icon: <SiAndroid /> },
        { name: "Xcode / iOS", level: "Intermediate", icon: <SiApple /> },
      ],
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "MongoDB", level: "Intermediate", icon: <SiMongodb /> },
        { name: "SQL", level: "Intermediate", icon: <SiMysql /> },
        { name: "NoSQL", level: "Intermediate", icon: <SiFirebase /> },
        { name: "Firebase", level: "Intermediate", icon: <SiFirebase /> },
        { name: "SQLite (CLI)", level: "Intermediate", icon: <SiSqlite /> },
        { name: "Amazon S3", level: "Intermediate", icon: <SiAmazon /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Amazon CloudWatch", level: "Intermediate", icon: <SiAmazon /> },
        { name: "Git & GitHub", level: "Advanced", icon: <SiGit /> },
        { name: "Agile", level: "Advanced", icon: <SiEagle /> },
        { name: "Docker", level: "Intermediate", icon: <SiDocker /> },
        { name: "CI/CD", level: "Intermediate", icon: <SiDocker /> }, // no specific icon, reusing Docker
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
              <ul className="flex flex-wrap gap-4">
                {skills.map(({ name, level, icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow cursor-default text-sm font-medium text-gray-700"
                    title={`${name} — ${level}`}
                  >
                    <span className="text-lg text-indigo-600">{icon}</span>
                    <span>{name}</span>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 font-semibold">
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
