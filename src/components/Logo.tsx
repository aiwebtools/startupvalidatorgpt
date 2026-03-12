
import React from 'react';

interface LogoProps {
  className?: string;
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", small = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="relative z-10 flex items-center">
          <div className="mr-2">
            <svg 
              width={small ? "24" : "32"} 
              height={small ? "24" : "32"} 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="transition-transform duration-300 hover:scale-110"
            >
              <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#0AFFFF" />
              <path d="M16 16V30L30 23V9L16 16Z" fill="#0AFFFF" fillOpacity="0.5" />
              <path d="M16 16V30L2 23V9L16 16Z" fill="#0AFFFF" fillOpacity="0.3" />
              <path d="M16 2L2 9L16 16L30 9L16 2Z" stroke="#0AFFFF" strokeWidth="0.5" />
              <path d="M16 16V30L30 23V9L16 16Z" stroke="#0AFFFF" strokeWidth="0.5" />
              <path d="M16 16V30L2 23V9L16 16Z" stroke="#0AFFFF" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className={`font-display font-bold ${small ? "text-sm" : "text-lg"} text-gradient-blue`}>
              Startup Validator GPT
            </div>
            {!small && (
              <div className="text-xs text-gray-400 -mt-1">
                Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyberpunk-blue transition-colors">AiWebTools.AI</a>
              </div>
            )}
          </div>
        </div>
        <div className="absolute inset-0 blur-xl bg-cyberpunk-blue/20 rounded-full animate-pulse-glow"></div>
      </div>
    </div>
  );
};

export default Logo;
