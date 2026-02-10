const About = () => {
  return (
    <>
      <section className="mb-20">
        <p className="text-xl text-gray-400 mb-3">
          Hello, I'm a <span className="text-primary">Software Developer</span>
        </p>
        <h1 className="text-4xl lg:text-6xl font-semibold leading-tight mb-10 max-w-[600px]">
          Certified Software Developer Based in Kigali, Rwanda
        </h1>
        <div className="flex gap-10 lg:gap-20 mb-20 flex-col lg:flex-row">
          <div className="flex flex-col">
            <span className="text-5xl lg:text-7xl font-bold leading-none">
              8<span className="text-3xl lg:text-4xl align-top">+</span>
            </span>
            <span className="text-xl text-gray-400 mt-2">Years</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl lg:text-7xl font-bold leading-none">
              96<span className="text-3xl lg:text-4xl align-top">+</span>
            </span>
            <span className="text-xl text-gray-400 mt-2">Projects</span>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-medium text-gray-400 mb-6">About Me</h2>
        <p className="text-2xl font-light max-w-[700px] leading-relaxed">
          I specialize in software development, focusing on creating efficient, user-friendly solutions.
        </p>
      </section>
    </>
  );
};

export default About;
