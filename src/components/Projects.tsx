import { useNavigate } from 'react-router-dom';
import { Eye, ArrowRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
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
                        className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-pink-600 transition-colors duration-200 flex items-center gap-2 neon-glow"
                      >
                        <Eye className="w-4 h-4" />
                        See More
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-200 flex items-center gap-2 neon-border"
                      >
                        <GithubIcon className="w-4 h-4" />
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
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
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
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-1.5 group/btn transition-colors duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      See More
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white font-medium text-sm flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <GithubIcon className="w-4 h-4" />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg neon-glow"
          >
            Let's Work Together
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;