import { Code, Smartphone, Database, Brain, Palette, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Building responsive and modern web applications using React, TypeScript, and latest technologies.',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Frontend Development',
      description: 'Creating beautiful, user-friendly interfaces with focus on performance and accessibility.',
    },
    {
      icon: <Database size={40} />,
      title: 'Backend Development',
      description: 'Developing robust APIs and server-side applications with Node.js, Express, and databases.',
    },
    {
      icon: <Brain size={40} />,
      title: 'AI Integration',
      description: 'Implementing AI and machine learning solutions to enhance application capabilities.',
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive user experiences with Adobe Illustrator and Photoshop.',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Consulting',
      description: 'Providing technical guidance and project management for software development initiatives.',
    },
  ];

  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-medium mb-12">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-dark rounded-2xl p-10 flex flex-col justify-between min-h-[250px]">
            <div className="text-primary mb-4">{service.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
