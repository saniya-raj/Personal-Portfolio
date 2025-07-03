import { Code, Mail, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Professional headshot */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
              alt="Professional headshot" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            Hi, I'm <span className="text-blue-600">Alex Johnson</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Code size={20} />
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>
          
          <div className="animate-bounce-gentle">
            <ChevronDown className="text-slate-400 text-2xl mx-auto" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
