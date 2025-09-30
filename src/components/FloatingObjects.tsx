const FloatingObjects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-pink-500/20 float-1 blur-sm"></div>
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-400/20 float-2 blur-sm"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/15 to-purple-600/15 float-3 blur-sm"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-32 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400/30 to-pink-500/30 transform rotate-45 float-1 blur-xs"></div>
      <div className="absolute bottom-60 right-10 w-12 h-12 bg-gradient-to-r from-purple-500/25 to-cyan-400/25 transform rotate-12 float-2 rounded-lg"></div>
      <div className="absolute top-60 left-1/3 w-20 h-20 border-2 border-cyan-400/20 transform rotate-45 float-3"></div>
      
      {/* Triangle shapes */}
      <div className="absolute top-80 right-1/4 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-pink-500/30 float-2"></div>
      <div className="absolute bottom-80 left-10 w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-cyan-400/25 float-1 transform rotate-180"></div>
      
      {/* Small particles */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full pulse-animation"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-500 rounded-full pulse-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-500 rounded-full pulse-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full pulse-animation" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-green-400 rounded-full pulse-animation" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Hexagons */}
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 transform rotate-45 float-3" 
           style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
      <div className="absolute bottom-1/2 right-32 w-6 h-6 bg-gradient-to-r from-purple-500/25 to-cyan-400/25 transform rotate-12 float-1"
           style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
      
      {/* Lines and paths */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#ff0080" stopOpacity="0.1"/>
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7928ca" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        <path className="float-1" d="M50,200 Q200,100 350,200 T650,200" stroke="url(#lineGradient1)" strokeWidth="2" fill="none"/>
        <path className="float-2" d="M100,400 Q300,300 500,400 T800,400" stroke="url(#lineGradient2)" strokeWidth="1.5" fill="none"/>
        <circle cx="150" cy="150" r="3" fill="#00f5ff" opacity="0.6" className="pulse-animation"/>
        <circle cx="450" cy="350" r="2" fill="#ff0080" opacity="0.4" className="pulse-animation" style={{ animationDelay: '1s' }}/>
        <circle cx="650" cy="250" r="4" fill="#7928ca" opacity="0.5" className="pulse-animation" style={{ animationDelay: '2s' }}/>
      </svg>
      
      {/* Orbiting elements */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-2 left-2 w-4 h-4 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border border-pink-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1 right-1 w-3 h-3 bg-pink-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingObjects;