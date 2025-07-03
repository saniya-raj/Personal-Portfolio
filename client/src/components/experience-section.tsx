export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Led development of enterprise-level web applications using React, Node.js, and AWS. Managed a team of 4 developers and successfully delivered 15+ projects on time and within budget.',
      technologies: ['React', 'Node.js', 'AWS', 'Team Leadership']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications for early-stage startup. Collaborated closely with design and product teams to implement user-friendly interfaces.',
      technologies: ['JavaScript', 'Python', 'Django', 'PostgreSQL']
    },
    {
      title: 'Junior Web Developer',
      company: 'WebDesign Co.',
      period: '2019 - 2020',
      description: 'Built responsive websites and web applications for small to medium businesses. Gained experience in modern web technologies and client communication.',
      technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'Client Relations']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-12 animate-slide-up">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                <div className="ml-16 bg-slate-50 p-6 rounded-lg shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-800">{experience.title}</h3>
                    <span className="text-sm text-slate-500 bg-blue-600/10 px-3 py-1 rounded-full">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">{experience.company}</p>
                  <p className="text-slate-600 mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
