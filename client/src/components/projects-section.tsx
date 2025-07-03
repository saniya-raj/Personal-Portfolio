import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Data Visualization with D3.js',
      description: 'Built interactive data visualization charts as part of FreeCodeCamp certification. Created dynamic bar charts, scatter plots, and heat maps to represent complex datasets using D3.js and JavaScript.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['D3.js', 'JavaScript', 'HTML/CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Statistical Analysis with Python',
      description: 'Completed comprehensive statistical analysis projects including descriptive statistics, hypothesis testing, and regression analysis using Python libraries for academic coursework.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Machine Learning Algorithms Implementation',
      description: 'Implemented fundamental machine learning algorithms from scratch as part of certification coursework, including linear regression, k-means clustering, and decision trees.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['Python', 'Scikit-learn', 'Mathematics'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden animate-slide-up"
              >
                <div className="h-48 bg-slate-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} interface`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-600/10 text-blue-600 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.liveUrl}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-200 flex items-center gap-1"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Github size={20} />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
