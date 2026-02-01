import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiPython,
  SiAndroid,
  SiApple,
  SiMysql,
  SiFirebase,
  SiAmazon,
  SiC,
  SiCplusplus,
  SiDocker,
  SiSqlite,
} from "react-icons/si";
import { GiEagleHead } from "react-icons/gi"; // Better Da Vinci style icon for Agile
import { DiJava } from "react-icons/di"; // Java icon usually found in 'di' or 'fa'

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
        { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
        { name: "Python", level: "Intermediate", icon: <SiPython /> },
        { name: "Java", level: "Intermediate", icon: <DiJava /> },
        { name: "C", level: "Intermediate", icon: <SiC /> },
        { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
      ],
    },
    {
      category: "Mobile & Cloud",
      skills: [
        { name: "Android", level: "Intermediate", icon: <SiAndroid /> },
        { name: "Xcode / iOS", level: "Intermediate", icon: <SiApple /> },
        { name: "Amazon Cloud", level: "Intermediate", icon: <SiAmazon /> },
        { name: "Docker", level: "Intermediate", icon: <SiDocker /> },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: "Intermediate", icon: <SiMongodb /> },
        { name: "SQL (Postgres)", level: "Intermediate", icon: <SiMysql /> },
        { name: "Firebase", level: "Intermediate", icon: <SiFirebase /> },
        { name: "SQLite", level: "Intermediate", icon: <SiSqlite /> },
      ],
    },
    {
      category: "Tools & Agile",
      skills: [
        { name: "Git & GitHub", level: "Advanced", icon: <SiGit /> },
        { name: "Agile", level: "Advanced", icon: <GiEagleHead /> },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Centered Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-serif italic text-[#3e2723] mb-4">
          Masteries & Blueprints
        </h2>
        <div className="w-24 h-0.5 bg-[#8d6e63] mx-auto opacity-40"></div>
        <p className="mt-4 text-[#5d4037] italic opacity-75">
          Technical proficiencies and digital craft.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {skillGroups.map(({ category, skills }) => (
          <div 
            key={category} 
            className="bg-[#fdfbf7] border border-[#8d6e63]/30 p-8 relative group hover:shadow-lg transition-all duration-300"
          >
            {/* Corner accents using your theme colors  */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#3e2723]"></div>
            
            <h3 className="text-xl font-bold mb-6 text-[#3e2723] border-b border-dotted border-[#8d6e63]/30 pb-2 font-serif tracking-widest uppercase">
              {category}
            </h3>
            
            <ul className="space-y-4">
              {skills.map(({ name, level, icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-3 text-[#5d4037] group/item"
                >
                  <span className="text-xl text-[#8d6e63] opacity-80 group-hover/item:opacity-100 transition-opacity">
                    {icon}
                  </span>
                  <span className="font-serif font-medium">{name}</span>
                  <div className="flex-grow border-b border-dotted border-[#8d6e63]/20 mx-2 relative top-1"></div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#8d6e63] opacity-60">
                    {level === "Advanced" ? "Master" : "Adept"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}