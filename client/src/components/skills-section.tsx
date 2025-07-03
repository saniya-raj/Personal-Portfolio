import { Database, Code, Cloud, GitBranch, Palette, Server } from 'lucide-react';

export default function SkillsSection() {
  const technicalSkills = [
    { name: 'Mathematics / Statistics', level: 90 },
    { name: 'Python Programming', level: 75 },
    { name: 'Data Analysis', level: 70 },
    { name: 'Mathematical Modeling', level: 85 },
    { name: 'Data Visualization', level: 65 },
  ];

  const tools = [
    { name: 'Python', icon: Code },
    { name: 'NumPy', icon: Database },
    { name: 'Pandas', icon: Database },
    { name: 'Matplotlib', icon: Palette },
    { name: 'D3.js', icon: Palette },
    { name: 'Git', icon: GitBranch },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                        <tool.icon className="text-blue-600" size={20} />
                      </div>
                      <span className="text-slate-700 font-medium">{tool.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
