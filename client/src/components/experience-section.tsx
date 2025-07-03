export default function ExperienceSection() {
  const experiences = [
    {
      title: 'MSc Mathematics',
      company: 'Indian Institute of Technology, Patna',
      period: '2024 - Present',
      description: 'Currently pursuing Master of Science in Mathematics with focus on applied mathematics, statistics, and computational methods. Developing strong analytical skills and mathematical foundations for data science applications.',
      technologies: ['Advanced Statistics', 'Computational Mathematics', 'Research Methodology', 'Mathematical Modeling']
    },
    {
      title: 'BSc(Hons) Mathematics',
      company: 'Banaras Hindu University',
      period: '2021 - 2024',
      description: 'Completed Bachelor of Science with Honors in Mathematics with 9.0 CGPA. Gained comprehensive knowledge in calculus, algebra, statistics, and mathematical analysis. Achieved AIR 511 in IIT JAM Mathematics.',
      technologies: ['Pure Mathematics', 'Applied Mathematics', 'Statistics', 'Mathematical Analysis']
    },
    {
      title: 'Data Science Certifications',
      company: 'FreeCodeCamp & Online Platforms',
      period: '2023 - Present',
      description: 'Completed multiple certification courses in data science, machine learning, and programming. Built practical projects demonstrating skills in data analysis, visualization, and statistical modeling.',
      technologies: ['Python', 'Data Analysis', 'Machine Learning', 'Data Visualization']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Education & Certifications</h2>
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
