
import React from 'react';
import AnimatedText from './AnimatedText';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0B4619] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-yellow-400 font-medium mb-4 block">ABOUT US</span>
              <AnimatedText
                text={
                  <h2 className="text-5xl font-display font-bold mb-6 text-white">
                    CREATIVE MINDS<br/>
                    BEHIND THE MAGIC
                  </h2>
                }
              />
              
              <AnimatedText
                text={
                  <p className="text-gray-200 leading-relaxed mb-6">
                    The DM Brand is a team of passionate creators and strategic thinkers dedicated to transforming ideas into impactful marketing campaigns. By blending creativity and innovation, we help businesses cut through the digital noise, engage their audience, and thrive in a competitive landscape.
                  </p>
                }
              />
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Creative Team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
