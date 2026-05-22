import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Thisura Nipun</h3>
            <p className="text-gray-300 leading-relaxed">
              Software Developer passionate about creating innovative web applications 
              and solving complex problems with clean, efficient code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#skills')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Skills
              </a>
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Projects
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links and Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="https://github.com/ThisuraNipun"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white hover:neon-glow transition-all duration-200"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/thisura-nipun-1997-03-28-ace"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-cyan-600 hover:text-white hover:neon-glow transition-all duration-200"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:imthisuranipun@gmail.com"
                aria-label="Email"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white hover:neon-glow transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-cyan-400 text-sm">imthisuranipun@gmail.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Thisura Nipun. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;