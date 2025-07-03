import { MapPin, GraduationCap, Coffee } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0bce7d2f16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                  alt="Profile photo placeholder" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Passionate Mathematics Graduate & Aspiring Data Scientist
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a mathematics graduate with a strong foundation in statistical analysis and data science. Graduated with 9.0 CGPA from BHU 
                and achieved AIR 511 in IIT JAM Mathematics 2025. Currently pursuing MSc in Mathematics from IIT Patna, I specialize in applying 
                mathematical concepts to solve real-world data problems through programming and analytical thinking.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                My academic journey has equipped me with solid theoretical knowledge in mathematics and statistics. Through various 
                certification courses and projects, I've developed practical skills in data analysis, visualization, and machine 
                learning algorithms.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                  <MapPin className="text-blue-600" size={16} />
                  <span className="text-slate-700">Sitamarhi, Bihar</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                  <GraduationCap className="text-blue-600" size={16} />
                  <span className="text-slate-700">BSc(Hons) Math @ BHU</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                  <GraduationCap className="text-blue-600" size={16} />
                  <span className="text-slate-700">MSc Math @ IIT Patna</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <span className="text-blue-800 font-semibold">🏆 IIT JAM AIR 511</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
