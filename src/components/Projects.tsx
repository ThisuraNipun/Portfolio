import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useAnimations';
import { projects } from '../data/projects';

const Projects = () => {
  const navigate = useNavigate();
  const titleRef = useScrollAnimation();
  const featuredRef = useScrollAnimation();
  const otherRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const handleSeeMore = (id: number) => {
    navigate(`/project/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div ref={featuredRef} className="mb-16 scroll-slide-left">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group glass-dark rounded-2xl shadow-lg overflow-hidden hover:neon-glow transition-all duration-300 animate-fadeInUp neon-border"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleSeeMore(project.id)}
                        className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-pink-600 transition-colors duration-200 flex items-center neon-glow"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        See More
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200 flex items-center neon-border"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleSeeMore(project.id)}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-white font-medium text-sm group/btn transition-colors duration-200"
                  >
                    See More
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div ref={otherRef} className="scroll-slide-right">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group glass-dark rounded-xl shadow-md hover:neon-glow transition-all duration-300 overflow-hidden animate-fadeInUp neon-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gray-800 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">Project Image</div>
                  )}
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-700 text-cyan-400 px-2 py-1 rounded text-xs font-medium border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleSeeMore(project.id)}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-1 group/btn transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      See More
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white font-medium text-sm flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="mt-16 text-center scroll-fade-in">
          <p className="text-lg text-gray-300 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg neon-glow"
          >
            Let's Work Together
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;