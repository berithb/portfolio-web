const CV = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 lg:p-12 rounded-lg shadow-xl">
      <header className="border-b-2 border-gray-300 pb-6 mb-6">
        <h1 className="text-4xl font-bold mb-2">Mushikiwabo Bat Belite</h1>
        <p className="text-lg mb-4">Address: KIGALI CITY, KICUKIRO</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <p>TEL: +250788775608</p>
          <p>EMAIL: batybelite12@gmail.com</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm mt-2">
          <a href="https://linkedin.com/in/mushikiwabo-belite-3a99372b9" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com/berithb" className="text-blue-600 hover:underline">GitHub</a>
          <a href="https://bportofolio.netlify.app" className="text-blue-600 hover:underline">Portfolio</a>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">EXPERIENCE</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Frontend Developer (Internship)</h3>
          <p className="text-gray-600 mb-2">Uruti Hub Gikondo | 04/2024 – Present</p>
          <ul className="list-disc ml-6 space-y-1 text-sm">
            <li>Collaborated on UI design and implemented responsive interfaces using HTML, CSS, and JavaScript.</li>
            <li>Developed dynamic features and reusable components in React (and Vue.js when needed).</li>
            <li>Integrated frontend with backend APIs using React Query for efficient data handling.</li>
            <li>Ensured UI/UX best practices, accessibility, and cross-browser compatibility.</li>
            <li>Optimized performance and maintained clean, modular, well-documented code.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Event Planner</h3>
          <p className="text-gray-600 mb-2">Self-employed / Contract | Kigali, Rwanda | 2023 – Present</p>
          <ul className="list-disc ml-6 space-y-1 text-sm">
            <li>Coordinate activities and manage logistics for various events to ensure successful execution.</li>
            <li>Handle appointment setting and maintain clear, effective communication with clients throughout the planning process.</li>
            <li>Leverage organizational skills to manage time and resources efficiently across multiple projects.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">AI Research Intern</h3>
          <p className="text-gray-600 mb-2">Waga vacAi / Ai Tools | Kigali, Rwanda / Online | 03/2024 – 04/2024</p>
          <ul className="list-disc ml-6 space-y-1 text-sm">
            <li>Conducted research on cutting-edge AI technologies and techniques, including reinforcement learning, generative adversarial networks (GANs), and transfer learning.</li>
            <li>Implemented and evaluated novel machine learning algorithms and models for specific research projects.</li>
            <li>Collaborated with senior researchers to brainstorm ideas, design experiments, and analyze results.</li>
            <li>Assisted in the development of AI software prototypes and proof-of-concept implementations.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Management Intern</h3>
          <p className="text-gray-600 mb-2">Kigali Appline | Kigali, Rwanda | 05/2023 – 08/2023</p>
          <ul className="list-disc ml-6 space-y-1 text-sm">
            <li>Gained hands-on experience in business management and operations.</li>
            <li>Supported the team with daily administrative tasks and project coordination.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">EDUCATION</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold">A2 in Software Development</h3>
          <p className="text-gray-600">COG High School | Kigali, Rwanda | 09/2022 – 07/2025</p>
          <p className="text-sm mt-1">Relevant Coursework: Software Development, Programming.</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">AI Certificate</h3>
          <p className="text-gray-600">ALX | Kigali, Rwanda | 03/2024 – 04/2024</p>
          <p className="text-sm mt-1">Completed intensive training focused on Artificial Intelligence applications.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-primary">SKILLS</h2>
        
        <div className="space-y-3 text-sm">
          <div>
            <strong>Computer Skills:</strong> Adobe Illustrator, Adobe Photoshop.
          </div>
          <div>
            <strong>Technical Skills:</strong> React, TypeScript, Node.js, Express.js, MongoDB, MySQL, Artificial Intelligence, Machine Learning, Data Science, HTML, CSS, Software Development, Reinforcement Learning, Transfer Learning.
          </div>
          <div>
            <strong>Foreign Language Skills:</strong> English (Advanced), Kinyarwanda (Native).
          </div>
          <div>
            <strong>Other Skills:</strong> Appointment Setting, Client Communication, Event Coordination, Project Management, Strategic Planning, Research Methodology.
          </div>
        </div>
      </section>

      <div className="mt-8 text-center">
        <button onClick={() => window.print()} className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition">
          Print CV
        </button>
      </div>
    </div>
  );
};

export default CV;
