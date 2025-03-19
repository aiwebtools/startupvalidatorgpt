
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What is Startup Validator GPT?",
      answer: "Startup Validator GPT is an AI-powered tool that conducts deep-level analysis on startup ideas, evaluating market viability, scalability, competition, risk factors, funding opportunities, and execution feasibility. It helps entrepreneurs validate their business concepts before investing significant time and resources."
    },
    {
      question: "How accurate is the market analysis?",
      answer: "The market analysis is based on real-time data gathered through web searches for current market trends, industry reports, startup funding activity, and competitor data. While highly informative, it should be used as one input in your decision-making process alongside other research methods."
    },
    {
      question: "What information do I need to provide?",
      answer: "To get the most accurate assessment, you should provide details about your startup's industry, the problem it solves, business model, target customers, revenue strategy, key competitors, and current funding stage. If you don't have all this information, the system can generate educated assumptions based on industry benchmarks."
    },
    {
      question: "How is the risk assessment calculated?",
      answer: "The risk assessment is calculated based on multiple factors including execution complexity, regulatory challenges, market saturation, financial requirements, and technical feasibility. Each factor is weighted according to industry-specific benchmarks to provide a comprehensive risk score."
    },
    {
      question: "Can I use this for any type of startup?",
      answer: "Yes, Startup Validator GPT can analyze startup ideas across various industries including SaaS, e-commerce, fintech, AI, health tech, and many others. The analysis is tailored to the specific characteristics and market dynamics of each industry."
    },
    {
      question: "What do I receive after the analysis?",
      answer: "You'll receive a comprehensive report that includes market viability score, scalability rating, competitive advantage assessment, funding readiness analysis, risk factor breakdown, and custom recommendations for improving your startup's chances of success."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(10, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 70%)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 glass-card rounded-full">
            <span className="text-cyberpunk-blue text-sm font-medium">Common Questions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </h2>
          
          <p className="text-gray-300">
            Everything you need to know about Startup Validator GPT and how it can help validate your business idea.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full glass-card rounded-xl p-6 text-left flex justify-between items-center transition-all duration-300 ${
                  openIndex === index ? 'shadow-neon' : 'hover:shadow-neon/50'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <div>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyberpunk-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="mt-2 px-6 py-4 bg-black/40 rounded-xl border border-white/5 animate-fade-in">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
