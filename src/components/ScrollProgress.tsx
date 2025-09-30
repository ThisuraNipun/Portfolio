import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 transition-all duration-150 ease-out shadow-lg"
        style={{ 
          width: `${scrollProgress}%`,
          boxShadow: `0 0 10px rgba(0, 245, 255, 0.5)`
        }}
      />
    </div>
  );
};

export default ScrollProgress;