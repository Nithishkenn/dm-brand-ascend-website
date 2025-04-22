
import React from 'react';
import AnimatedText from './AnimatedText';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText text={<h2 className="section-title">About Us</h2>} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText
                text={
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-brand-orange -mt-4 -ml-4"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="The DM Brand Company Team" 
                      className="rounded-lg shadow-xl w-full"
                    />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-brand-orange -mb-4 -mr-4"></div>
                  </div>
                }
              />
            </div>
            
            <div>
              <AnimatedText
                text={
                  <h3 className="text-3xl font-bold font-display mb-6">
                    From Legacy to Digital-First <span className="text-brand-orange">Power Moves</span>
                  </h3>
                }
              />
              
              <AnimatedText
                text={
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The DM Brand Company grew from deep roots in traditional marketing to become a digital-first powerhouse. Our journey began with our founder Nithish, who brings 20+ years of family legacy expertise in marketing and insurance.
                  </p>
                }
              />
              
              <AnimatedText
                text={
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We've evolved with the marketing landscape, embracing new technologies and platforms while staying true to time-tested principles of powerful storytelling and strategic thinking.
                  </p>
                }
              />
              
              <AnimatedText
                text={
                  <p className="text-gray-700 leading-relaxed">
                    Today, we partner with forward-thinking startups, bold entrepreneurs, and established businesses looking to make their next big move in the digital space.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
