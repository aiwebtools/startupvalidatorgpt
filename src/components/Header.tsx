
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Startup Validator GPT', href: 'https://chatgpt.com/g/g-67db474ca77c8191ba486995811c1c95-startup-validator-gpt', external: true },
    { name: 'AI Business Tools Suite', href: 'https://businessplanandtrainai.lovable.app//?via=aiwebtools', external: true },
    { name: 'FAQ', href: '#faq', external: false },
    { name: 'Disclaimer', href: '#disclaimer', external: false },
    { name: 'More AI Tools', href: 'https://aiwebtools.lovable.app/?via=aiwebtools', external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 ${
        isScrolled 
          ? 'py-3 bg-black/60 backdrop-blur-lg shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-gray-200 hover:text-cyberpunk-blue transition-colors duration-200 px-1 py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cyberpunk-blue after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://chatgpt.com/g/g-67db474ca77c8191ba486995811c1c95-startup-validator-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="button-glow ml-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium text-sm transition-all duration-300 hover:shadow-neon"
          >
            Try It Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 glass-card transition-all duration-200 ease-out ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="py-3 px-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block py-3 px-2 text-white hover:text-cyberpunk-blue active:text-cyberpunk-blue transition-colors duration-150 text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://chatgpt.com/g/g-67db474ca77c8191ba486995811c1c95-startup-validator-gpt"
            target="_blank"
            rel="noopener noreferrer" 
            className="block py-3 px-4 my-2 text-center rounded-md bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Try It Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
