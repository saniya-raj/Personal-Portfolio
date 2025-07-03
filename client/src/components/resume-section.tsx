import { Download, FileText, Award, GraduationCap, Code, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResumeSection() {
  const resumeHighlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      items: [
        'MSc Mathematics - IIT Patna (2024-Present)',
        'BSc(Hons) Mathematics - BHU (9.0 CGPA)'
      ]
    },
    {
      icon: Trophy,
      title: 'Achievements',
      items: [
        'IIT JAM Mathematics - AIR 511',
        'Strong Mathematical Foundation',
        'Academic Excellence (9.0 CGPA)'
      ]
    },
    {
      icon: Code,
      title: 'Technical Skills',
      items: [
        'Python, R, SQL',
        'Data Analysis & Visualization',
        'Machine Learning Algorithms'
      ]
    },
    {
      icon: Award,
      title: 'Certifications',
      items: [
        'Data Science - FreeCodeCamp',
        'Statistical Analysis Projects',
        'Mathematical Modeling'
      ]
    }
  ];

  const handleDownloadResume = () => {
    // This will be updated with actual PDF link later
    alert('Resume download link will be added soon!');
  };

  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Resume</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Resume Preview */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-slate-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Saniya Raj</h3>
                  <p className="text-slate-600 mb-4">Mathematics Graduate | Aspiring Data Scientist</p>
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <span>📧 saniyarajbnt@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <span>📱 +91 8298525725</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <span>📍 Sitamarhi, Bihar</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Education</h4>
                    <div className="text-sm text-slate-600 space-y-1">
                      <p>• MSc Mathematics - IIT Patna (2024-Present)</p>
                      <p>• BSc(Hons) Mathematics - BHU (9.0 CGPA)</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Key Achievement</h4>
                    <div className="text-sm text-slate-600">
                      <p>• IIT JAM Mathematics - AIR 511</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Technical Skills</h4>
                    <div className="text-sm text-slate-600">
                      <p>• Python, R, SQL, Data Analysis</p>
                      <p>• Machine Learning, Statistics</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 text-center">
                    This is a preview. Download full resume for complete details.
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Highlights */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Resume Highlights</h3>
                <p className="text-slate-600 mb-6">
                  Mathematics graduate with strong analytical skills and growing expertise in data science. 
                  Demonstrated academic excellence and competitive exam success.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {resumeHighlights.map((section, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-slate-800">{section.title}</h4>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-flex items-center gap-3"
                >
                  <Download size={20} />
                  Download Complete Resume
                </Button>
                <p className="text-sm text-slate-500 mt-2">
                  PDF format • Updated recently
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}