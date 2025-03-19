
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechNova",
      quote: "Startup Validator GPT provided insights I hadn't even considered. The competitive analysis was spot-on and helped me pivot my business model early, saving months of development time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Marcus Johnson",
      role: "CEO, FinEdge Solutions",
      quote: "The market viability analysis was incredibly thorough. It helped us identify a niche that competitors had overlooked, giving us a competitive edge from day one.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Co-founder, HealthTech Innovations",
      quote: "As a first-time founder, I was unsure about my startup's investment readiness. The funding recommendations were tailored to our stage and helped us secure our seed round.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(176, 38, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 glass-card rounded-full">
            <span className="text-cyberpunk-blue text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What <span className="text-gradient-purple">Founders</span> Are Saying
          </h2>
          
          <p className="text-gray-300">
            Entrepreneurs from various industries have used Startup Validator GPT to refine their ideas and improve their chances of success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:shadow-neon"
            >
              <div className="absolute top-4 right-4 text-cyberpunk-yellow flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              
              <div className="absolute -top-6 -left-6 opacity-10">
                <Quote className="h-24 w-24 text-cyberpunk-blue" />
              </div>
              
              <p className="text-gray-300 mb-6 relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center mt-4">
                <div className="mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyberpunk-blue/30"
                  />
                </div>
                
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-67db474ca77c8191ba486995811c1c95-startup-validator-gpt" 
            target="_blank"
            rel="noopener noreferrer"
            className="button-glow px-6 py-3 rounded-md bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium transition-all duration-300 hover:shadow-neon"
          >
            Try Startup Validator GPT Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
