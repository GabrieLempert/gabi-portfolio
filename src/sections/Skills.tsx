export function Skills() {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'HTML & CSS',
    'Tailwind CSS',
    'MongoDB',
    'Git & GitHub'
  ];

  return (
    <section id="skills"className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <li
              key={skill}
              className="px-4 py-2 bg-white rounded-xl shadow text-sm font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
