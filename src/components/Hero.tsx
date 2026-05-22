import { Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { useTypingEffect } from '../hooks/useAnimations';
import FloatingObjects from './FloatingObjects';

const Hero = () =>
{
  const typingRef = useTypingEffect("Software Developer", 80);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center animated-bg relative overflow-hidden pb-5">
      <FloatingObjects />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="text-center animate-fadeInUp">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 p-1 neon-glow hover-lift pulse-animation">
              <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden flex items-center justify-center relative">
                <img
                  src="profileImage.png"
                  alt="Thisura Nipun Profile"
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300"
                  onError={(e) =>
                  {
                    // Fallback to initials if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLDivElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center text-4xl font-bold text-white bg-gray-900 rounded-full">
                  TN
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin opacity-60"
                  style={{
                    borderTopColor: '#00f5ff',
                    borderRightColor: '#ff0080',
                    animationDuration: '8s'
                  }}>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Thisura Nipun</span>
          </h1>

          {/* Subtitle with Typing Effect */}
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            <span className="block mb-2">I'm a</span>
            <span ref={typingRef} className="gradient-text font-semibold typewriter inline-block">
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm a software engineering undergraduate with a background in engineering, building structured and scalable web applications using modern technologies.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              onClick={(e) =>
              {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-pink-600 hover-lift ripple transition-all duration-200 shadow-lg neon-glow-pink magnetic-hover"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) =>
              {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-medium hover:bg-cyan-400 hover:text-gray-900 hover-lift ripple transition-all duration-200 neon-border magnetic-hover"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/ThisuraNipun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/thisura-nipun-1997-03-28-ace"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-200"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:imthisuranipun@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-pink-500 transform hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            onClick={(e) =>
            {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            aria-label="Scroll to About"
            className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
