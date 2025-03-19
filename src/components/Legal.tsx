
import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 mb-4 glass-card rounded-full">
            <span className="text-cyberpunk-blue text-sm font-medium">Legal Information</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Legal <span className="text-gradient-purple">Disclaimer</span>
          </h2>
        </div>
        
        <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-6 right-6 text-cyberpunk-blue opacity-20">
            <Shield className="h-24 w-24" />
          </div>
          
          <div className="flex items-start mb-6">
            <div className="shrink-0 mr-4">
              <AlertCircle className="h-6 w-6 text-cyberpunk-pink" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Disclaimer of Liability</h3>
              
              <p className="text-gray-300 mb-4">
                The information provided by Startup Validator GPT ("we," "us," or "our") on this website and through our AI tool is for general informational and educational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information provided.
              </p>
              
              <p className="text-gray-300">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of this tool or reliance on any information provided. Your use of this tool and your reliance on any information is solely at your own risk.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <div className="shrink-0 mr-4">
              <AlertCircle className="h-6 w-6 text-cyberpunk-pink" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">No Professional Advice</h3>
              
              <p className="text-gray-300">
                The information provided through Startup Validator GPT does not constitute professional, financial, legal, or business advice. It is not intended to be a substitute for professional advice, diagnosis, or treatment. Always seek the advice of qualified professionals regarding any questions you may have about your specific business circumstances.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <div className="shrink-0 mr-4">
              <AlertCircle className="h-6 w-6 text-cyberpunk-pink" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">External Links Disclaimer</h3>
              
              <p className="text-gray-300">
                This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="shrink-0 mr-4">
              <AlertCircle className="h-6 w-6 text-cyberpunk-pink" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Limitation of Accuracy</h3>
              
              <p className="text-gray-300">
                Startup Validator GPT utilizes AI technology to provide analysis and predictions based on available data. The accuracy of these analyses is limited by the data available, market conditions, and inherent uncertainties in business markets. All analyses should be considered as one of many inputs in your decision-making process and not as definitive predictions of business outcomes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-400 text-sm max-w-3xl mx-auto">
          <p>
            By using Startup Validator GPT, you acknowledge that you have read, understood, and agree to these disclaimers. If you do not agree with any part of this disclaimer, please do not use our services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legal;
