
import React from 'react';
import { 
  TrendingUp, 
  Scale, 
  Users, 
  AlertTriangle, 
  DollarSign, 
  Search, 
  BarChart4, 
  CheckCircle2 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-cyberpunk-blue" />,
      title: "Market Viability Analysis",
      description: "Determines if your idea has strong demand and market fit based on current trends and industry data."
    },
    {
      icon: <Scale className="h-10 w-10 text-cyberpunk-purple" />,
      title: "Scalability Assessment",
      description: "Evaluates growth potential, funding requirements, and long-term sustainability of your startup."
    },
    {
      icon: <Users className="h-10 w-10 text-cyberpunk-pink" />,
      title: "Competitive Landscape",
      description: "Identifies key competitors, barriers to entry, and clear differentiation opportunities."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-cyberpunk-yellow" />,
      title: "Risk & Feasibility Score",
      description: "Assigns a risk factor based on industry data, execution complexity, and financial projections."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-cyberpunk-blue" />,
      title: "Investment Readiness",
      description: "Assesses if your startup idea is attractive to investors and provides funding recommendations."
    },
    {
      icon: <Search className="h-10 w-10 text-cyberpunk-purple" />,
      title: "Data-Driven Validation",
      description: "Conducts web searches for real-time market trends, startup funding trends, and industry reports."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Research & Data Collection",
      description: "Conducts web searches for market trends, industry reports, and competitor analysis."
    },
    {
      number: "02",
      title: "Market Viability Analysis",
      description: "Determines if there is growing demand for your idea and rates viability on a scale of 1-10."
    },
    {
      number: "03",
      title: "Competitive Assessment",
      description: "Creates a competitive heatmap with analysis of market gaps and differentiation options."
    },
    {
      number: "04",
      title: "Scalability Check",
      description: "Evaluates how well your business can grow beyond its initial customer base and market."
    },
    {
      number: "05",
      title: "Investment Analysis",
      description: "Determines funding potential and matches your startup to appropriate investment sources."
    },
    {
      number: "06",
      title: "Risk Assessment",
      description: "Assigns a risk factor and provides a comprehensive execution feasibility score."
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid z-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 glass-card rounded-full">
            <span className="text-cyberpunk-blue text-sm font-medium">Key Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Comprehensive Startup <span className="text-gradient-purple">Validation</span>
          </h2>
          
          <p className="text-gray-300">
            Our AI-powered platform performs deep-level analysis across multiple dimensions to ensure your startup idea is solid before you invest time and resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-neon hover:-translate-y-1"
            >
              <div className="mb-4 relative">
                <div className="relative z-10">{feature.icon}</div>
                <div className="absolute top-0 left-0 w-10 h-10 bg-white/5 rounded-full blur-xl"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 glass-card rounded-full">
              <span className="text-cyberpunk-blue text-sm font-medium">Methodology</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our <span className="text-gradient-blue">Validation</span> Process
            </h2>
            
            <p className="text-gray-300">
              A systematic approach to analyzing every aspect of your startup idea from market fit to execution feasibility.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-neon flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full border border-cyberpunk-blue/40 bg-cyberpunk-blue/10 text-cyberpunk-blue font-bold text-xl">
                  {step.number}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="glass-card rounded-xl p-8 inline-block max-w-3xl">
              <BarChart4 className="h-16 w-16 text-cyberpunk-blue mx-auto mb-4" />
              
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Comprehensive Analysis Report
              </h3>
              
              <p className="text-gray-300 mb-6">
                After running your idea through our validation process, you'll receive a detailed report with actionable insights and recommendations.
              </p>
              
              <a 
                href="https://chatgpt.com/g/g-67db474ca77c8191ba486995811c1c95-startup-validator-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className="button-glow px-6 py-3 rounded-md bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium transition-all duration-300 hover:shadow-neon"
              >
                Validate Your Idea Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
