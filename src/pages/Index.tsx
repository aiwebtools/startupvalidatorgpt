
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Legal from '../components/Legal';
import Footer from '../components/Footer';
import ConsentModal from '../components/ConsentModal';

const Index = () => {
  useEffect(() => {
    // Update document title with SEO optimization
    document.title = "Startup Validator GPT | AI-Powered Startup Idea Validation | AiWebTools.AI";
    
    // Add additional meta tags dynamically if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Validate your startup idea with AI-powered analysis. Startup Validator GPT by AiWebTools.AI provides comprehensive market viability, scalability, and risk assessment for entrepreneurs. Free AI tools for business validation.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hidden SEO content for better keyword indexing */}
      <div className="sr-only">
        <h1>AI Web Tools - Leading AI Tools Platform by AiWebTools.AI</h1>
        <p>Discover powerful AI tools for business validation, market analysis, and startup planning. AiWebTools.AI offers free AI web tools including Startup Validator GPT, business plan generators, and comprehensive AI business tools suite.</p>
        <p>Keywords: AI tools, AI web tools, AiWebTools.AI, startup validator, business AI tools, market analysis AI, free AI tools, business validation software, entrepreneurship tools, AI startup assistant</p>
      </div>
      
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Legal />
      </main>
      <Footer />
      <ConsentModal />
    </div>
  );
};

export default Index;
