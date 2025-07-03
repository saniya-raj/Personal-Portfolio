import React from 'react';

interface ResumeTemplateProps {
  onClose: () => void;
}

export default function ResumeTemplate({ onClose }: ResumeTemplateProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Resume Preview</h2>
          <div className="flex gap-4">
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Print/Save as PDF
            </button>
            <button
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
        
        <div className="p-8 resume-content">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Saniya Raj</h1>
              <p className="text-xl text-gray-600 mb-4">Mathematics Graduate | Aspiring Data Scientist</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span>📧 saniyarajbnt@gmail.com</span>
                <span>📱 +91 8298525725</span>
                <span>📍 Sitamarhi, Bihar</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-gray-600">
                <span>🔗 linkedin.com/in/saniya-raj-5732bb250</span>
                <span>🔗 github.com/saniya-raj</span>
                <span>🔗 youtube.com/@mathsloverpoint</span>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Dedicated mathematics graduate with strong analytical and problem-solving skills. Currently pursuing MSc in Mathematics from IIT Patna. 
                Achieved AIR 511 in IIT JAM Mathematics 2025, demonstrating exceptional mathematical aptitude. Passionate about applying mathematical 
                concepts to data science and eager to contribute to data-driven solutions in a professional environment.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Master of Science in Mathematics</h3>
                  <p className="text-gray-700">Indian Institute of Technology, Patna</p>
                  <p className="text-gray-600 text-sm">2025 - Present</p>
                  <p className="text-gray-600 text-sm mt-1">Focus: Applied Mathematics, Statistics, Computational Methods</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Bachelor of Science (Honors) in Mathematics</h3>
                  <p className="text-gray-700">Banaras Hindu University</p>
                  <p className="text-gray-600 text-sm">2021 - 2024 | CGPA: 9.0/10.0</p>
                  <p className="text-gray-600 text-sm mt-1">Comprehensive study of Pure Mathematics, Applied Mathematics, Statistics, Mathematical Analysis</p>
                </div>
              </div>
            </section>

            {/* Key Achievement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Key Achievement</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900">IIT JAM Mathematics 2025</h3>
                <p className="text-blue-800 font-medium">All India Rank: 511</p>
                <p className="text-blue-700 text-sm mt-1">Competitive examination for admission to Master's programs in Mathematics at IITs and IISc</p>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Programming Languages</h3>
                  <p className="text-gray-700">Python, R, SQL, JavaScript, HTML/CSS</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Science Tools</h3>
                  <p className="text-gray-700">NumPy, Pandas, Matplotlib, Scikit-learn, D3.js</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mathematical Software</h3>
                  <p className="text-gray-700">MATLAB, Mathematica, LaTeX</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Core Competencies</h3>
                  <p className="text-gray-700">Statistical Analysis, Mathematical Modeling, Data Visualization</p>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Data Visualization with D3.js</h3>
                  <p className="text-gray-600 text-sm">FreeCodeCamp Certification Project</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Built interactive data visualization charts including dynamic bar charts, scatter plots, and heat maps 
                    to represent complex datasets using D3.js and JavaScript.
                  </p>
                  <p className="text-gray-600 text-sm mt-1"><strong>Technologies:</strong> D3.js, JavaScript, HTML/CSS</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Statistical Analysis with Python</h3>
                  <p className="text-gray-600 text-sm">Academic Coursework</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Completed comprehensive statistical analysis projects including descriptive statistics, 
                    hypothesis testing, and regression analysis using Python libraries.
                  </p>
                  <p className="text-gray-600 text-sm mt-1"><strong>Technologies:</strong> Python, NumPy, Pandas, Matplotlib</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Machine Learning Algorithms Implementation</h3>
                  <p className="text-gray-600 text-sm">Certification Coursework</p>
                  <p className="text-gray-700 text-sm mt-1">
                    Implemented fundamental machine learning algorithms from scratch including linear regression, 
                    k-means clustering, and decision trees as part of certification coursework.
                  </p>
                  <p className="text-gray-600 text-sm mt-1"><strong>Technologies:</strong> Python, Scikit-learn, Mathematics</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Certifications</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900">Data Science Certification</span>
                  <span className="text-gray-600 text-sm">FreeCodeCamp</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900">Data Visualization Certification</span>
                  <span className="text-gray-600 text-sm">FreeCodeCamp</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900">Machine Learning Fundamentals</span>
                  <span className="text-gray-600 text-sm">Online Platforms</span>
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Languages</h3>
                  <p className="text-gray-700">Hindi (Native), English (Proficient)</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interests</h3>
                  <p className="text-gray-700">Mathematical Problem Solving, Data Analysis, Educational Content Creation</p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center text-gray-500 text-sm mt-8 pt-4 border-t">
              <p>Resume generated from portfolio | Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}