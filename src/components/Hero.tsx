
import React, { useRef, useEffect } from 'react';
import ThreeDElement from './ThreeDElement';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const hero = heroRef.current;
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width - 0.5) * 2;
      const yPercent = (y / rect.height - 0.5) * 2;
      
      hero.style.setProperty('--mouse-x', `${xPercent}`);
      hero.style.setProperty('--mouse-y', `${yPercent}`);
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(10, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%)"
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid z-0 opacity-30"></div>
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(176, 38, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%)"
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col items-center gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 glass-card rounded-full">
              <span className="text-cyberpunk-blue text-sm font-medium">Powered by GPT4o</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
              <span className="text-gradient-blue">Validate</span> Your Startup Idea in Minutes
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Comprehensive analysis of market viability, scalability, and risk factors across industries. Get expert insights backed by real-time data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://chatgpt.com/g/g-67db474ca77c8191ba486995811c1c95-startup-validator-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className="button-glow px-6 py-3 rounded-md bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium transition-all duration-300 hover:shadow-neon"
              >
                Try Startup Validator GPT
              </a>
              <a 
                href="#features" 
                className="px-6 py-3 rounded-md border border-white/20 text-white hover:border-cyberpunk-blue/50 hover:text-cyberpunk-blue transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 h-[400px] md:h-[500px] relative animate-float">
            {/* 3D Element */}
            <div className="absolute inset-0 z-10">
              <ThreeDElement />
            </div>
            
            {/* Overlay image */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <a 
                href="https://ideogram.ai/assets/image/lossless/response/4i8GYlLZRiCtjAUOYefVMA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src="https://ideogram.ai/assets/image/lossless/response/4i8GYlLZRiCtjAUOYefVMA" 
                  alt="Startup Validator Concept" 
                  className="max-w-full h-auto max-h-[400px] rounded-lg shadow-neon object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* YouTube Video Embed */}
        <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-neon border border-white/10">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/P4J0ErIVXgY?autoplay=1&mute=0&vq=hd1080&loop=1&playlist=P4J0ErIVXgY"
            title="AI Web Tools Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-blue to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
