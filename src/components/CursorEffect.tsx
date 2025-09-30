import { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .magnetic-hover');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          background: isHovering ? 'rgba(0, 245, 255, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          transform: `scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.2s ease-out, background 0.2s ease-out',
        }}
      />
      
      {/* Cursor trail */}
      <div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-40"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          background: isHovering 
            ? 'radial-gradient(circle, rgba(0, 245, 255, 0.3) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(255, 0, 128, 0.2) 0%, transparent 70%)',
          transform: `scale(${isHovering ? 2 : 1})`,
          transition: 'transform 0.3s ease-out, background 0.3s ease-out',
        }}
      />
    </>
  );
};

export default CursorEffect;