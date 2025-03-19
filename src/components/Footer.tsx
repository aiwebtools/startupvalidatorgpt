
import React from 'react';
import Logo from './Logo';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerNavItems = [
    { name: 'Startup Validator GPT', href: 'https://chatgpt.com/g/g-67db474ca77c8191ba486995811c1c95-startup-validator-gpt' },
    { name: 'AI Business Tools Suite', href: 'https://businessplanandtrainai.lovable.app//?via=aiwebtools' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://www.aiwebtools.ai' },
    { name: 'Privacy Policy', href: 'https://openai.com/policies/privacy-policy/' },
    { name: 'Terms of Service', href: 'https://aiwebtools.ai/terms-of-services' },
  ];

  return (
    <footer className="bg-black/40 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 text-sm max-w-md mt-4">
              Powered by GPT4o, Startup Validator GPT helps entrepreneurs validate and assess startup ideas with comprehensive analysis of market viability, scalability, and risk factors.
            </p>
            <div className="mt-6 flex flex-col space-y-2">
              <a 
                href="tel:+14758008096" 
                className="flex items-center text-gray-400 hover:text-cyberpunk-blue transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span>(475) 800-8096</span>
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center text-gray-400 hover:text-cyberpunk-blue transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerNavItems.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-cyberpunk-blue transition-colors text-sm"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerNavItems.slice(4).map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-cyberpunk-blue transition-colors text-sm"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {year} <a href="https://www.aiwebtools.ai" className="hover:text-cyberpunk-blue transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai" 
              className="button-glow px-5 py-2 rounded-full bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white text-sm font-medium transition-all duration-300 hover:shadow-neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
