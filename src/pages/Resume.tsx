const Resume = () => {
  const experience = [
    { date: '04/2024 – Present', title: 'Frontend Developer (Internship) - Uruti Hub Gikondo' },
    { date: '03/2024 – 04/2024', title: 'AI Research Intern - Waga vacAi / Ai Tools' },
    { date: '2023 – Present', title: 'Event Planner - Self-employed / Contract' },
    { date: '05/2023 – 08/2023', title: 'Management Intern - Kigali Appline' },
  ];

  const education = [
    { date: '09/2022 – 07/2025', title: 'A2 in Software Development - COG High School' },
    { date: '03/2024 – 04/2024', title: 'AI Certificate - ALX' },
  ];

  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-medium mb-12">Resume</h1>
      
      <div className="mb-16">
        <div className="inline-block bg-primary text-dark px-6 py-3 rounded-xl font-bold mb-8 ml-10">
          Experience
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-5">
              <div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-primary rounded-full"></div>
              <span className="block text-lg font-bold text-primary mb-2">{item.date}</span>
              <p className="text-lg leading-relaxed">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="inline-block bg-primary text-dark px-6 py-3 rounded-xl font-bold mb-8 ml-10">
          Education
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {education.map((item, index) => (
            <div key={index} className="relative pl-5">
              <div className="absolute left-0 top-1.5 w-2.5 h-2.5 bg-primary rounded-full"></div>
              <span className="block text-lg font-bold text-primary mb-2">{item.date}</span>
              <p className="text-lg leading-relaxed">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resume;
