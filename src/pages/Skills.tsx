const Skills = () => {
  const coreSkills = [
    'React', 'TypeScript', 'JavaScript', 'HTML/CSS',
    'Node.js', 'Express.js', 'MongoDB', 'MySQL',
  ];

  const tools = [
    'Git & GitHub', 'VS Code', 'Figma', 'Adobe Illustrator',
    'Adobe Photoshop', 'Vite', 'TailwindCSS', 'React Query',
  ];

  const languages = [
    { name: 'English', level: 'Advanced' },
    { name: 'Kinyarwanda', level: 'Native' },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Project Management',
    'Research Methodology',
  ];

  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-medium mb-12">Skills</h1>

      <div className="mb-12">
        <div className="bg-tag px-5 py-3 rounded-xl inline-block font-bold text-xl mb-8">
          Core Skills
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {coreSkills.map((skill, index) => (
            <div key={index} className="bg-card px-5 py-6 rounded-xl text-center font-bold">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <div className="bg-tag px-5 py-3 rounded-xl inline-block font-bold text-xl mb-8">
          Tool Stack
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-card px-5 py-10 rounded-xl text-center text-xl font-bold">
              {tool}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-tag px-5 py-3 rounded-xl inline-block font-bold text-xl mb-8 w-full text-center">
            Languages
          </div>
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between py-3 border-b border-gray-700">
              <span className="text-lg">{lang.name}</span>
              <span className="text-lg text-gray-400">{lang.level}</span>
            </div>
          ))}
        </div>

        <div>
          <div className="bg-tag px-5 py-3 rounded-xl inline-block font-bold text-xl mb-8 w-full text-center">
            Soft Skills
          </div>
          <ul className="space-y-3 pl-5">
            {softSkills.map((skill, index) => (
              <li key={index} className="text-lg leading-loose">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
