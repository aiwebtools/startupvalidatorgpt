
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ConsentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('startupValidatorConsent');
    
    if (!hasConsented) {
      // Show modal after a slight delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('startupValidatorConsent', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      {/* Modal */}
      <div className="neo-blur relative rounded-xl w-full max-w-md p-6 animate-scale-in">
        <button 
          onClick={handleAccept}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-4">Disclaimer</h3>
          
          <p className="text-gray-300 text-sm mb-4">
            By using Startup Validator GPT, you acknowledge that:
          </p>
          
          <ul className="text-gray-300 text-sm space-y-2 mb-4">
            <li className="flex">
              <span className="mr-2">•</span>
              <span>The information provided is for general informational purposes only</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>It does not constitute professional business, financial, or legal advice</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>Analysis accuracy is limited by available data and market conditions</span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>We are not liable for decisions made based on this information</span>
            </li>
          </ul>
          
          <p className="text-gray-300 text-sm">
            For complete details, please review our full <a href="#disclaimer" onClick={handleAccept} className="text-cyberpunk-blue hover:underline">disclaimer</a>.
          </p>
        </div>
        
        <button
          onClick={handleAccept}
          className="w-full button-glow py-3 rounded-md bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium transition-all duration-300 hover:shadow-neon"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default ConsentModal;
