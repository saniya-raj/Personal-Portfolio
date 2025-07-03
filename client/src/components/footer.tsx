import { Github, Linkedin, Twitter, Download } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Saniya Raj</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Mathematics Graduate passionate about applying mathematical concepts to data science. 
              Always open to learning opportunities and collaborations.
            </p>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-slate-300 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                &copy; 2025 Saniya Raj. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
