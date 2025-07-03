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
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                  alt="About me photo" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Passionate Developer with 5+ Years of Experience
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a full-stack developer based in San Francisco, specializing in creating exceptional digital experiences. 
                My journey started with a Computer Science degree from Stanford, and I've been building web applications 
                that combine beautiful design with robust functionality ever since.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or hiking the beautiful trails around the Bay Area. I believe in continuous learning and staying 
                up-to-date with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                  <MapPin className="text-blue-600" size={16} />
                  <span className="text-slate-700">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                  <GraduationCap className="text-blue-600" size={16} />
                  <span className="text-slate-700">CS @ Stanford</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                  <Coffee className="text-blue-600" size={16} />
                  <span className="text-slate-700">Coffee Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
