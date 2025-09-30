import { useScrollAnimation } from '../hooks/useAnimations';

const About = () => {
  const leftSectionRef = useScrollAnimation();
  const rightSectionRef = useScrollAnimation();
  const statsRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div ref={leftSectionRef} className="mb-12 lg:mb-0 scroll-slide-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate software developer with 3+ years of experience creating 
                web applications that solve real-world problems. I love turning complex 
                requirements into elegant, user-friendly solutions.
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge through 
                technical blog posts and community talks.
              </p>

              {/* Key Stats */}
              <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 scroll-fade-in">
                <div className="text-center p-4 glass-dark neon-border rounded-lg">
                  <div className="text-2xl font-bold gradient-text mb-1">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 glass-dark neon-border rounded-lg">
                  <div className="text-2xl font-bold gradient-text mb-1">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 glass-dark neon-border rounded-lg col-span-2 md:col-span-1">
                  <div className="text-2xl font-bold gradient-text mb-1">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>

              {/* Download Resume Button */}
              <a
                href="/Thisura_Nipun_CV.pdf"
                download
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg neon-glow"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div ref={rightSectionRef} className="lg:pl-12 scroll-slide-right">
            <div>
              {/* Code Block Mockup */}
              <div className="bg-black rounded-lg p-6 shadow-2xl neon-border">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm text-cyan-400">developer.js</div>
                </div>
                <div className="text-sm font-mono">
                  <div className="text-pink-400">const <span className="text-cyan-400">developer</span> = {`{`}</div>
                  <div className="ml-4 text-green-400">name: <span className="text-yellow-300">'John Doe'</span>,</div>
                  <div className="ml-4 text-green-400">skills: [</div>
                  <div className="ml-8 text-yellow-300">'React', 'TypeScript',</div>
                  <div className="ml-8 text-yellow-300">'Node.js', 'Python'</div>
                  <div className="ml-4 text-green-400">],</div>
                  <div className="ml-4 text-green-400">passion: <span className="text-yellow-300">'Building amazing apps'</span>,</div>
                  <div className="ml-4 text-green-400">coffee: <span className="text-orange-400">true</span></div>
                  <div className="text-pink-400">{`}`};</div>
                  <div className="mt-2 text-gray-500">// Always learning, always coding</div>
                </div>
              </div>

              {/* Tech Stack Icons */}
              <div className="mt-8 grid grid-cols-4 gap-4">
                <div className="glass-dark p-4 rounded-lg shadow-md flex items-center justify-center hover:neon-glow transition-all duration-200">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded flex items-center justify-center text-black font-bold text-sm">JS</div>
                </div>
                <div className="glass-dark p-4 rounded-lg shadow-md flex items-center justify-center hover:neon-glow transition-all duration-200">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">TS</div>
                </div>
                <div className="glass-dark p-4 rounded-lg shadow-md flex items-center justify-center hover:neon-glow transition-all duration-200">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded flex items-center justify-center text-white font-bold text-sm">RC</div>
                </div>
                <div className="glass-dark p-4 rounded-lg shadow-md flex items-center justify-center hover:neon-glow transition-all duration-200">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded flex items-center justify-center text-white font-bold text-sm">ND</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;