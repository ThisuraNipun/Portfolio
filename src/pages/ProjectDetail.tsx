import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { useEffect, useState, useCallback } from 'react';

const ProjectDetail = () =>
{
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() =>
  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Build the full gallery: cover image + gallery images
  const allImages = project ? [project.image, ...project.gallery] : [];

  const openLightbox = (index: number) =>
  {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goPrev = useCallback(() =>
    setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length),
    [allImages.length]);

  const goNext = useCallback(() =>
    setActiveIndex((i) => (i + 1) % allImages.length),
    [allImages.length]);

  // Keyboard navigation
  useEffect(() =>
  {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) =>
    {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, goPrev, goNext]);

  if (!project)
  {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Project Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-pink-600 transition-all duration-200"
        >
          ← Back to Portfolio
        </button>
      </div>
    );
  }

  const techColors: Record<string, string> = {
    React: 'from-cyan-500/20 to-cyan-500/10 border-cyan-400/40 text-cyan-300',
    'Node.js': 'from-green-500/20 to-green-500/10 border-green-400/40 text-green-300',
    MongoDB: 'from-green-600/20 to-green-600/10 border-green-500/40 text-green-400',
    Firebase: 'from-yellow-500/20 to-yellow-500/10 border-yellow-400/40 text-yellow-300',
    TypeScript: 'from-blue-500/20 to-blue-500/10 border-blue-400/40 text-blue-300',
    default: 'from-pink-500/20 to-pink-500/10 border-pink-400/40 text-pink-300',
  };

  const getTechColor = (tech: string) => techColors[tech] || techColors.default;

  return (
    <div className="min-h-screen bg-gray-900 animated-bg">

      {/* ─── Lightbox Modal ─── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.95)' }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10 glass-dark rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {activeIndex + 1} / {allImages.length}
          </div>

          {/* Main image */}
          <div
            className="relative flex items-center justify-center w-full max-w-5xl px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={goPrev}
              className="absolute left-2 glass-dark neon-border rounded-full p-3 text-cyan-400 hover:neon-glow transition-all duration-200 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <img
              key={activeIndex}
              src={allImages[activeIndex]}
              alt={`${project.title} screenshot ${activeIndex + 1}`}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl animate-fadeIn"
              style={{ border: '1px solid rgba(0,245,255,0.2)' }}
            />

            <button
              onClick={goNext}
              className="absolute right-2 glass-dark neon-border rounded-full p-3 text-cyan-400 hover:neon-glow transition-all duration-200 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            className="flex gap-2 mt-6 overflow-x-auto pb-2 px-4 max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {allImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden transition-all duration-200 ${
                  i === activeIndex
                    ? 'ring-2 ring-cyan-400 scale-105'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ─── Back Button ─── */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate('/')}
          className="glass-dark neon-border px-5 py-2.5 rounded-full text-cyan-400 font-medium flex items-center gap-2 hover:neon-glow transition-all duration-300 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      {/* ─── Hero Banner ─── */}
      <div
        className="relative h-[55vh] min-h-[380px] w-full overflow-hidden cursor-pointer"
        onClick={() => openLightbox(0)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-gray-900" />

        {/* Click-to-view hint */}
        <div className="absolute bottom-6 right-6 glass-dark neon-border rounded-full px-3 py-1.5 flex items-center gap-2 text-xs text-cyan-300">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
          Click to view
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 border border-cyan-400/40 text-cyan-300 uppercase tracking-widest">
            {project.status}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl mb-4 max-w-4xl leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {project.role}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {project.duration}
            </span>
          </div>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left — Overview, Gallery & Features */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview */}
            <div className="glass-dark neon-border rounded-2xl p-8 animate-fadeInUp">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-pink-500 rounded-full inline-block" />
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-base">{project.longDescription}</p>
            </div>

            {/* ─── Image Gallery ─── */}
            <div className="glass-dark neon-border rounded-2xl p-8 animate-fadeInUp" style={{ animationDelay: '0.08s' }}>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-pink-500 rounded-full inline-block" />
                Screenshots
                <span className="ml-auto text-xs text-gray-500 font-normal">Click to enlarge</span>
              </h2>

              {/* Large featured image */}
              <div
                className="relative rounded-xl overflow-hidden mb-3 cursor-zoom-in group"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={allImages[0]}
                  alt={`${project.title} main`}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-dark rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Thumbnail grid */}
              <div className="grid grid-cols-4 gap-2">
                {allImages.slice(1).map((src, i) => (
                  <div
                    key={i}
                    className="relative rounded-lg overflow-hidden cursor-zoom-in group aspect-video"
                    onClick={() => openLightbox(i + 1)}
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 2}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    {/* overlay badge for last thumb if more exist */}
                    {i === 3 && allImages.length > 5 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-sm">
                        +{allImages.length - 5}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="glass-dark neon-border rounded-2xl p-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-gradient-to-b from-pink-400 to-cyan-500 rounded-full inline-block" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Tech Stack, Info & Links */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="glass-dark neon-border rounded-2xl p-6 animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-5 bg-gradient-to-b from-cyan-400 to-pink-500 rounded-full inline-block" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`bg-gradient-to-r ${getTechColor(tech)} px-3 py-1.5 rounded-full text-sm font-medium border`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="glass-dark neon-border rounded-2xl p-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-5 bg-gradient-to-b from-pink-400 to-cyan-500 rounded-full inline-block" />
                Project Info
              </h2>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Role', value: project.role },
                  { label: 'Duration', value: project.duration },
                  { label: 'Status', value: project.status },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg neon-glow"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 glass-dark neon-border text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:neon-glow hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Source
              </a>
            </div>

            {/* Gallery quick-view sidebar */}
            <div className="glass-dark neon-border rounded-2xl p-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-pink-500 rounded-full inline-block" />
                All Screenshots
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {allImages.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(i)}
                    className="aspect-video rounded-lg overflow-hidden group relative"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            More <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p, i) => (
                <div
                  key={p.id}
                  onClick={() => { navigate(`/project/${p.id}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="group glass-dark neon-border rounded-xl overflow-hidden cursor-pointer hover:neon-glow transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">{p.title}</h3>
                    <p className="text-gray-400 text-xs line-clamp-2">{p.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-cyan-400 text-xs font-medium group-hover:gap-2 transition-all">
                      See More
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
