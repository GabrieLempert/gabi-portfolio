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
    <section id="skills" className="bg-[#f0e6d2] py-20 relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#5d4037] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3e2723] mb-4 tracking-tight font-serif">
            Skills & Expertise
          </h2>
          <div className="w-32 h-0.5 bg-[#5d4037] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="bg-[#fdfbf7] border border-[#5d4037] p-6 relative group hover:shadow-lg transition-all duration-300">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#3e2723]"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#3e2723]"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#3e2723]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#3e2723]"></div>

              <h3 className="text-xl font-bold mb-6 text-[#3e2723] border-b border-[#5d4037]/20 pb-2 font-serif tracking-wide">
                {category}
              </h3>
              
              <ul className="space-y-3">
                {skills.map(({ name, level, icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 text-[#5d4037] hover:text-[#3e2723] transition-colors group/item"
                    title={`${name} — ${level}`}
                  >
                    <span className="text-xl opacity-80 group-hover/item:opacity-100 transition-opacity">{icon}</span>
                    <span className="font-serif font-medium">{name}</span>
                    <div className="flex-grow border-b border-dotted border-[#5d4037]/30 mx-2 relative top-1"></div>
                    <span className="text-xs uppercase tracking-widest font-bold opacity-60">
                      {level === "Advanced" ? "Master" : "Adept"}
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
