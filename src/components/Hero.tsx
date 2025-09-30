import { useTypingEffect } from '../hooks/useAnimations';
import FloatingObjects from './FloatingObjects';

const Hero = () => {
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
                  onError={(e) => {
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
            Passionate about creating innovative web applications and solving complex problems 
            with clean, efficient code. I specialize in React, TypeScript, and modern web technologies.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              onClick={(e) => {
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
              onClick={(e) => {
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
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/thisura-nipun-1997-03-28-ace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:imthisuranipun@gmail.com"
              className="text-gray-400 hover:text-pink-500 transform hover:scale-110 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;