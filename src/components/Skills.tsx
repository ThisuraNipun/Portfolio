import { useScrollAnimation } from '../hooks/useAnimations';

const Skills = () => {
  const titleRef = useScrollAnimation();
  const skillsGridRef = useScrollAnimation();
  const techCloudRef = useScrollAnimation();
  const summaryRef = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Vue.js", level: 70 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vite", level: 85 },
        { name: "Jest", level: 80 },
        { name: "Figma", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div ref={skillsGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-scale">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className={`glass-dark rounded-xl shadow-lg p-8 hover-lift hover-glow-intense transition-all duration-300 neon-border stagger-${categoryIndex + 1}`}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-sm text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div ref={techCloudRef} className="mt-16 text-center scroll-fade-in">
          <h3 className="text-2xl font-bold text-white mb-8">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux", "Next.js", "GraphQL", "Firebase", "Vercel", "Netlify",
              "Stripe", "Socket.io", "Prisma", "Supabase", "Framer Motion", "Three.js"
            ].map((tech) => (
              <span 
                key={tech}
                className="glass-dark px-4 py-2 rounded-full text-gray-200 font-medium shadow-md hover-lift magnetic-hover transition-all duration-200 neon-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div ref={summaryRef} className="mt-16 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-2xl p-8 text-white text-center scroll-slide-up neon-glow-pink">
          <h3 className="text-2xl font-bold mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest technologies. 
            Currently exploring AI/ML integrations and advanced React patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;